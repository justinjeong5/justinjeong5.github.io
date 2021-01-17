const express = require('express');
const router = express.Router();

const { User } = require('../models/User')
const { auth } = require('../middleware/auth')

router.get('/auth', auth, (req, res) => {
  const isAdmin = (role) => {
    switch (role) {
      case 0:
        //0은 총괄 어드민
        return true;
      default:
        return false;
    }
  }
  res.status(200).json({
    userId: req.user._id,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    image: req.user.image,
    role: req.user.role,
    cart: req.user.cart,
    isAdmin: isAdmin(req.user.role),
    isAuth: true,
    message: '정상적으로 사용자가 인증되었습니다.'
  })
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
            maxAge: 1000 * 60 * 60 * 24 * 2, // Cookie expiration 2days (same with jsonwebtoken expire duration)
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
    { name: req.body.name }, (error, user) => {
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

router.post('/addToCart', auth, (req, res) => {
  User.findOne({ '_id': req.user._id },
    (error, user) => {
      if (error) {
        console.error(error)
        return res.status(400).json({ code: 'DatabaseError', message: '회원정보를 찾는 과정에서 문제가 발생했습니다.', error });
      }

      let duplicated = user.cart.filter(value => {
        return value.id === req.body.productId;
      }).length;

      if (duplicated) {
        User.findOneAndUpdate({ '_id': req.user._id, 'cart.id': req.body.productId },
          { $inc: { 'cart.$.quantity': 1 } },
          { new: true },
          (error, doc) => {
            if (error) {
              console.error(error);
              return res.status(400).json({ code: 'DatabaseError', message: '카트에 담는 과정에서 문제가 발생했습니다.', error });
            }
            return res.status(200).json({ message: '상품을 카트에 정상적으로 담았습니다.', cart: doc.cart });
          }
        )
      } else {
        User.findOneAndUpdate({ '_id': req.user._id }, {
          $push: {
            cart: {
              id: req.body.productId,
              quantity: 1,
              date: Date.now(),
            }
          }
        },
          { new: true },
          (error, doc) => {
            if (error) {
              console.error(error);
              return res.status(400).json({ code: 'DatabaseError', message: '카트에 담는 과정에서 문제가 발생했습니다.', error });
            }
            return res.status(200).json({ message: '상품을 카트에 정상적으로 담았습니다.', cart: doc.cart });
          }
        )
      }
    })
})

router.post('/removeFromCart', auth, (req, res) => {
  User.findOne({ '_id': req.user._id },
    (error, user) => {
      if (error) {
        console.error(error)
        return res.status(400).json({ code: 'DatabaseError', message: '회원정보를 찾는 과정에서 문제가 발생했습니다.', error });
      }
      const removeTargetItem = user.cart.filter(item => { return item.id === req.body.productId })[0];
      if (removeTargetItem.quantity > 1) {
        User.findOneAndUpdate({ '_id': req.user._id, 'cart.id': req.body.productId },
          { $inc: { 'cart.$.quantity': -1 } },
          { new: true },
          (error, doc) => {
            if (error) {
              console.error(error);
              return res.status(400).json({ code: 'DatabaseError', message: '카트에서 제거하는 과정에서 문제가 발생했습니다.', error });
            }
            return res.status(200).json({ message: '상품을 카트에서 정상적으로 꺼냇습니다.', cart: doc.cart });
          }
        )
      } else {
        User.findOneAndUpdate({ '_id': req.user._id },
          { '$pull': { 'cart': { id: req.body.productId } } },
          { new: true },
          (error, doc) => {
            if (error) {
              console.error(error)
              return res.status(400).json({ code: 'DatabaseError', message: '상품을 데이터베이스에서 찾을 수 없습니다.', error })
            }
            return res.status(200).json({ message: '상품을 카트에서 정상적으로 꺼냇습니다.', cart: doc.cart });
          })
      }
    })
})

router.get('/users', auth, (req, res) => {
  User.find()
    .exec((error, users) => {
      if (error) {
        return res.status(400).json({ code: 'DatabaseError', message: '전체 사용자 목록을 호출하는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '전체 사용자 목록을 정상적으로 가져왔습니다.', users, userId: req?.user._id })
    })
})


module.exports = router