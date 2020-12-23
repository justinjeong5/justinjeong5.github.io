const express = require('express');
const router = express.Router();

const { MovieFavorite } = require('../models/MovieFavorite')
const { auth } = require('../middleware/auth')

//=====================================
//                MovieFavorite
//=====================================

router.post('/favoriteNumber', auth, (req, res) => {
  MovieFavorite.find({ movieId: req.body.movieId })
    .exec((error, favorite) => {
      if (error) {
        return res.status(400).json({ code: 'DatabaseError', message: '좋아요 정보를 찾는 과정에서 문제가 발생했습니다.', error });
      }
      res.status(200).json({ message: '좋아요 개수를 정상적으로 가져왔습니다.', favoriteNumber: favorite.length })
    })
})

router.post('/changeFavorited', auth, (req, res) => {
  MovieFavorite.find(req.body)
    .exec((error, favorite) => {
      if (error) {
        return res.status(400).json({ code: 'DatabaseError', message: '좋아요를 찾는 과정에서 문제가 발생했습니다.', error });
      }
      if (!favorite.length) {
        // 아직 좋아요가 아닌 경우
        const favorite = new MovieFavorite(req.body)
        favorite.save((error, doc) => {
          if (error) {
            return res.status(400).json({ code: 'DatabaseError', message: '좋아요를 변경하는 과정에서 문제가 발생했습니다.', error });
          }
          res.status(200).json({ message: '좋아요가 정상적으로 눌렸습니다.', isFavorited: true })
        })
      } else {
        // 이미 좋아요인 경우
        MovieFavorite.findOneAndRemove(req.body)
          .exec((error, doc) => {
            if (error) {
              return res.status(400).json({ code: 'DatabaseError', message: '좋아요를 변경하는 과정에서 문제가 발생했습니다.', error });
            }
            res.status(200).json({ message: '좋아요가 정상적으로 취소되었습니다.', isFavorited: false })
          })
      }
    })
})

router.post('/isFavorited', auth, (req, res) => {
  MovieFavorite.find(req.body)
    .exec((error, favorite) => {
      if (error) {
        return res.status(400).json({ code: 'DatabaseError', message: '좋아요를 변경하는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '좋아요 상태를 정상적으로 가져왔습니다.', isFavorited: favorite.length > 0 })
    })
})

router.post('/favoritedList', auth, (req, res) => {
  MovieFavorite.find(req.body)
    .exec((error, favorite) => {
      if (error) {
        return res.status(400).json({ code: 'DatabaseError', message: '좋아요를 변경하는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '좋아요 목록을 정상적으로 가져왔습니다.', favoritedList: favorite })
    })
})

module.exports = router