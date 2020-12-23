const express = require('express');
const { Jaymall } = require('../models/Jaymall')

const router = express.Router();

//=====================================
//                Jaymall
//=====================================

router.post('/products', (req, res) => {
  const limit = parseInt(req.body.limit);
  const skip = parseInt(req.body.skip);

  Jaymall.find()
    .skip(skip)
    .limit(limit)
    .exec((error, products) => {
      if (error) {
        console.error(error)
        return res.status(400).json({ code: 'DatabaseError', message: '상품 목록을 가져오는 과정에서 문제가 발생했습니다.', error })
      }
      res.status(200).json({ message: '상품목록을 성공적으로 가져왔습니다.', products });
    })
})

module.exports = router