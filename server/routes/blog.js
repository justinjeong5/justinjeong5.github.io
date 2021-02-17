const express = require('express');
const router = express.Router();
const path = require('path')
const { Blog } = require('../models/Blog')
const { auth } = require('../middleware/auth')

const multer = require('multer')
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2'
})

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'justinjeong5.github.io',
    key(req, file, callback) {
      callback(null, `blog/${Date.now()}_${path.basename(file.originalname)}`)
    }
  }),
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
    return res.status(200).json({ message: '파일을 정상적으로 등록했습니다.', url: req.file.location, fileName: req.file.originalname });
  })
})

router.post('/blogs', (req, res) => {
  const skip = req.body.skip;
  const limit = req.body.limit;

  Blog.find()
    .populate('writer')
    .skip(skip)
    .limit(limit)
    .exec((error, blogs) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseError', message: '블로그 글을 불러오는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '블로그 목록을 정상적으로 가져왔습니다.', blogs })
    })
})

router.get('/:postId', (req, res) => {
  Blog.findOne({ '_id': req.params.postId })
    .populate('writer')
    .exec((error, blog) => {
      if (error) {
        console.error(error);
        return res.status(401).json({ code: 'DatabaseError', message: '블로그 글을 불러오는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '블로그 게시글을 정상적으로 가져왔습니다.', blog })
    })
})


module.exports = router