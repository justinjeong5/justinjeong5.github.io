const express = require('express');
const router = express.Router();
const path = require('path')
const { Blog } = require('../models/Blog')
const { auth } = require('../middleware/auth')

const multer = require('multer')

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
    fileSize: 30 * 1024 * 1024    //30 MB
  }
}).single('file')

//=====================================
//                Blog
//=====================================

router.post('/createPost', auth, (req, res) => {
  const blog = new Blog(req.body);
  blog.save((error, postInfo) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ code: 'DatabaseError', message: '블로그 글을 저장하는 과정에서 문제가 발생했습니다.', error });
    }
    Blog.findOne({ '_id': postInfo._id })
      .populate('writer')
      .exec((error, blog) => {
        if (error) {
          console.error(error);
          return res.status(400).json({ code: 'DatabaseError', message: '블로그 글을 저장 후, 불러오는 과정에서 문제가 발생했습니다.', error });
        }
        return res.status(200).json({ message: '블로그를 정상적으로 등록했습니다.', blog })
      })
  })
})

router.post('/uploadDataset', auth, (req, res) => {
  upload(req, res, error => {
    if (error) {
      console.error(error);
      return res.status(400).json({ code: 'MulterError', message: '파일을 업로드하는 과정에서 문제가 발생했습니다.', error });
    }
    return res.status(200).json({ message: '파일을 정상적으로 등록했습니다.', url: res.req.file.path, fileName: res.req.file.filename });
  })
})


module.exports = router