const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth')
const { Chat } = require('../models/Chat')


router.get('/chats', auth, (req, res) => {
  const variables = {}
  if (req.query.roomId) {
    variables.chatRoom = req.query.roomId
  }
  Chat.find(variables)
    .populate('writer')
    .exec((error, chats) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseError', message: '채팅 기록을 불러오는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '채팅을 정상적으로 가져왔습니다.', chats })
    })
})

module.exports = router