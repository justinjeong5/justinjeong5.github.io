const express = require('express');
const multer = require('multer');
const fs = require('fs')
const path = require('path')
const { auth } = require('../middleware/auth');
const { User } = require('../models/User')
const { Jaymall } = require('../models/Jaymall')

const router = express.Router();

try {
  console.log('Multer: 이미지를 disk storage에 저장합니다.')
  fs.accessSync('uploads')
} catch (error) {
  console.log('/uploads 폴더가 존재하지 않습니다. 동작을 위해 생성합니다.')
  fs.mkdirSync('uploads')
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    const ext = path.extname(file.originalname)
    const baseName = path.basename(file.originalname, ext)
    callback(null, baseName + new Date().getTime() + ext)
  },
  fileFilter: (req, file, callback) => {
    const ext = path.extname(file.originalname)
    if (!['.jpeg', '.jpg', '.png'].includes(ext)) {
      return callback(res.status(400).json({ code: 'MulterError', message: 'jpg, jpeg, png 파일만 업로드 가능합니다.' }), false)
    }
    callback(null, true)
  },
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024    //10 MB
  }
}).array('file')

//=====================================
//                Jaymall
//=====================================

router.post('/products', (req, res) => {
  const limit = parseInt(req.body.limit);
  const skip = parseInt(req.body.skip);
  const orderBy = req.body.orderBy ? req.body.orderBy : 'desc';
  const sortBy = req.body.sortBy ? req.body.sortBy : '_id';

  const findArgs = {}
  if (req.body.filters?.sort) {
    findArgs['sort'] = req.body.filters.sort
  }
  if (req.body.filters?.price) {
    findArgs['price'] = {
      $gte: req.body.filters.price[0],
      $lte: req.body.filters.price[1],
    }
  }
  if (req.body.filters?.word) {
    findArgs['$text'] = {
      '$search': req.body.filters.word
    }
  }

  Jaymall.find(findArgs)
    .populate('writer')
    .sort([[sortBy, orderBy]])
    .skip(skip)
    .limit(limit)
    .exec((error, products) => {
      if (error) {
        console.error(error)
        return res.status(400).json({ code: 'DatabaseError', message: '상품 목록을 가져오는 과정에서 문제가 발생했습니다.', error })
      }
      res.status(200).json({ message: '상품목록을 정상적으로 가져왔습니다.', products });
    })
})

router.post('/uploadImage', auth, (req, res) => {
  upload(req, res, error => {
    if (error) {
      console.error(error)
      return res.status(400).json({ code: 'MulterError', message: '이미지를 업로드하는 과정에서 문제가 발생했습니다.', error })
    }

    const images = req.files.map(value => {
      return { image: value.path, fileName: value.filename }
    })
    res.status(200).json({ message: '이미지를 정상적으로 업로드하였습니다.', images });
  })
})

router.post('/uploadProduct', auth, (req, res) => {
  User.findOne({ "_id": req.body.writer },
    (error, user) => {
      if (error) {
        console.error(error)
        return res.status(400).json({ code: 'DatabaseError', message: '사용자를 데이터베이스에서 찾을 수 없습니다.', error })
      }
      const product = new Jaymall(req.body)
      product.save((error, product) => {
        if (error) {
          console.error(error)
          return res.status(400).json({ code: 'DatabaseError', message: '상품을 등록하는 과정에서 문제가 발생했습니다.', error })
        }
        res.status(200).json({ message: '상품을 정상적으로 업로드하였습니다.', product });
      })
    })
})


router.get('/product_by_id', (req, res) => {
  const findArgs = { '_id': req.query.id }

  if (req.query.id === '') {
    return res.status(200).json({ message: '상품목록을 정상적으로 가져왔습니다.', productDetails: [] });
  }

  if (req.query.type === 'array') {
    findArgs['_id'] = { $in: [...req.query.id.split(',')] }
    Jaymall.find(findArgs)
      .populate('writer')
      .exec((error, productDetails) => {
        if (error) {
          console.error(error)
          return res.status(400).json({ code: 'DatabaseError', message: '사용자를 데이터베이스에서 찾을 수 없습니다.', error })
        }
        res.status(200).json({ message: '상품목록을 정상적으로 가져왔습니다.', productDetails });
      })
  } else {
    Jaymall.findOneAndUpdate(findArgs,
      { $inc: { 'views': 1 } },
      { new: true },
      (error, doc) => {
        if (error) {
          console.error(error);
          return res.status(400).json({ code: 'DatabaseError', message: '조회수를 증가하는 과정에서 문제가 발생했습니다.', error });
        }
        Jaymall.find(findArgs)
          .populate('writer')
          .exec((error, productDetails) => {
            if (error) {
              console.error(error)
              return res.status(400).json({ code: 'DatabaseError', message: '사용자를 데이터베이스에서 찾을 수 없습니다.', error })
            }
            res.status(200).json({ message: '상품목록을 정상적으로 가져왔습니다.', productDetails });
          })
      })
  }
})

module.exports = router