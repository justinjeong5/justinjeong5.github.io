const express = require('express');
const router = express.Router();

const { User } = require('../models/User')
const { auth } = require('../middleware/auth')

const path = require('path')
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk')

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
      callback(null, `user/${Date.now()}_${path.basename(file.originalname)}`)
    }
  }),
  limits: {
    fileSize: 3 * 1024 * 1024    // 3MB
  }
}).single('file')

router.get('/auth', auth, (req, res) => {
  const fullUser = req.user.toJSON();
  delete fullUser.password;

  return res.status(200).json({ user: fullUser })
})

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }, (error, alreadyExistUser) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ code: 'DatabaseFindError', message: '기존 유저를 찾는 과정에서 문제가 발생했습니다.', error });
    }
    if (alreadyExistUser) {
      return res.status(400).json({ code: 'AlreadyExistUser', message: '이미 존재하는 사용자입니다.' });
    }

    const user = new User(req.body);
    user.save((error, doc) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseSaveError', message: '유저 정보를 저장하는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '회원가입이 정상적으로 완료되었습니다.' })
    })
  })
})

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (error, user) => {
    if (!user) {
      return res.status(400).json({ code: 'NoSuchUser', message: '존재하지 않는 사용자입니다.' });
    }
    if (error) {
      console.error(error);
      return res.status(400).json({ code: 'DatabaseFindError', message: '기존 유저를 찾는 과정에서 문제가 발생했습니다.', error });
    }
    user.comparePassword(req.body.password, (error, isMatch) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseFindError', message: '비밀번호를 검증하는 과정에서 문제가 발생했습니다.', error });
      }
      if (!isMatch) {
        return res.status(400).json({ code: 'PasswordMismatch', message: '비밀번호가 일치하지 않습니다.' });
      }
      user.generateToken((error, user) => {
        if (error) {
          console.error(error);
          return res.status(400).json({ code: 'JsonWebTokenError', message: '토큰을 생성하는 과정에서 문제가 발생했습니다.', error });
        }
        if (process.env.NODE_ENV === 'production') {
          res.cookie('x_auth', user.token, {
            sameSite: 'none',
            secure: true,
            httpOnly: true,
          }).status(200).json({ message: '로그인이 정상적으로 완료되었습니다.', userId: user._id });
        } else {
          res.cookie('x_auth', user.token).status(200).json({ message: '로그인이 정상적으로 완료되었습니다.', userId: user._id });
        }
      })
    })
  })
})

router.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id, },
    { token: '' }, (error, user) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseError', message: '로그아웃하는 과정에서 문제가 발생했습니다.', error });
      }
      if (!user) {
        return res.status(400).json({ code: 'NoSuchUser', message: '존재하지 않는 사용자입니다.' });
      }
      res.cookie('x_auth', '').status(200)
        .json({ message: '로그아웃이 정상적으로 완료되었습니다.', userId: user._id });
    })
})

router.post('/confirm', auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (error, user) => {
    if (!user) {
      return res.status(400).json({ code: 'NoSuchUser', message: '존재하지 않는 사용자입니다.' });
    }
    if (error) {
      console.error(error);
      return res.status(400).json({ code: 'DatabaseFindError', message: '기존 유저를 찾는 과정에서 문제가 발생했습니다.', error });
    }
    user.comparePassword(req.body.password, (error, isMatch) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseFindError', message: '비밀번호를 검증하는 과정에서 문제가 발생했습니다.', error });
      }
      if (!isMatch) {
        return res.status(400).json({ code: 'PasswordMismatch', message: '비밀번호가 일치하지 않습니다.' });
      }
      res.status(200).json({ message: '본인인증이 정상적으로 완료되었습니다.' });
    })
  })
})

router.post('/edit', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id, },
    req.body, (error, user) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseError', message: '회원정보를 찾는 과정에서 문제가 발생했습니다.', error });
      }
      if (!user) {
        return res.status(400).json({ code: 'NoSuchUser', message: '존재하지 않는 사용자입니다.' });
      }
      res.status(200).json({ message: '회원정보가 정상적으로 변경되었습니다.' });
    })
})

router.post('/editImage', auth, (req, res) => {
  upload(req, res, error => {
    if (error) {
      console.error(error)
      return res.status(400).json({ code: 'MulterError', message: '이미지를 업로드하는 과정에서 문제가 발생했습니다.', error })
    }
    User.findOneAndUpdate({ _id: req.user._id, },
      { image: req.file.location }, (error, user) => {
        if (error) {
          console.error(error);
          return res.status(400).json({ code: 'DatabaseError', message: '회원정보를 찾는 과정에서 문제가 발생했습니다.', error });
        }
        if (!user) {
          return res.status(400).json({ code: 'NoSuchUser', message: '존재하지 않는 사용자입니다.' });
        }
        res.status(200).json({ message: '이미지를 정상적으로 업로드하였습니다.', url: req.file.location });
      })
  })
})


module.exports = router