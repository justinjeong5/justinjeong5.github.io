const express = require('express');
const router = express.Router();

const { ChatRoom } = require('../models/ChatRoom')

router.get('/chatRooms', (req, res) => {
  ChatRoom.find()
    .populate('writer')
    .exec((error, chatRooms) => {
      if (error) {
        console.error(error);
        return res.status(400).json({ code: 'DatabaseError', message: '채팅방 목록을 불러오는 과정에서 문제가 발생했습니다.', error });
      }
      return res.status(200).json({ message: '채팅방 목록을 정상적으로 가져왔습니다.', chatRooms })
    })
})

router.post('/create', (req, res) => {
  const chatRoom = new ChatRoom(req.body);
  chatRoom.save((error, doc) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ code: 'DatabaseSaveError', message: '채팅방 정보를 저장하는 과정에서 문제가 발생했습니다.', error });
    }
    ChatRoom.findOne({ '_id': doc._id })
      .populate('writer')
      .exec((error, chatRoom) => {
        if (error) {
          console.error(error);
          return res.status(400).json({ code: 'DatabaseError', message: '채팅방 정보를 불러오는 과정에서 문제가 발생했습니다.', error });
        }
        return res.status(200).json({ message: '회원가입이 정상적으로 완료되었습니다.', chatRoom })
      })
  })
})

router.post('/toggleFavorite', (req, res) => {
  ChatRoom.findOneAndUpdate({ '_id': req.body.roomId },
    { $set: { favorite: req.body.favorite } },
    (error, chatRoom) => {
      if (error) {
        console.error(error)
        return res.status(400).json({ code: 'DatabaseError', message: '채팅방 정보를 불러오는 과정에서 문제가 발생했습니다.', error })
      }
      if (!chatRoom) {
        console.error(error)
        return res.status(400).json({ code: 'NoSuchChatRoom', message: '채팅방을 데이터베이스에서 찾을 수 없습니다.', error })
      }
      return res.status(200).json({ message: '채팅방 좋아요 상태를 정상적으로 변경했습니다.', favorite: req.body.favorite, roomId: req.body.roomId });
    })
})

module.exports = router