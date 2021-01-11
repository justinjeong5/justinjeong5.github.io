const express = require('express');
const router = express.Router();
const { Comment } = require('../models/Comment')
const { auth } = require('../middleware/auth')

//=====================================
//                Comment
//=====================================

router.post('/save', auth, (req, res) => {
  const comment = new Comment(req.body);
  comment.save((error, commentInfo) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ code: 'DatabaseError', message: '댓글을 저장하는 과정에서 문제가 발생했습니다.', error });
    }
    Comment.findOne({ '_id': commentInfo._id })
      .populate('writer')
      .exec((error, comment) => {
        if (error) {
          console.error(error);
          return res.status(400).json({ code: 'DatabaseError', message: '댓글을 저장 후, 불러오는 과정에서 문제가 발생했습니다.', error });
        }
        return res.status(200).json({ message: '댓글을 정상적으로 등록했습니다.', comment })
      })
  })
})

router.post('/comments', (req, res) => {
  Comment.find(req.body)
    .populate('writer')
    .exec((error, comments) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseError', message: '댓글 목록을 불러오는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '댓글 목록을 정상적으로 가져왔습니다.', comments })
    })
})

module.exports = router