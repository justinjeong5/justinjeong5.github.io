const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()

const { Chat } = require('./models/Chat')
const { ChatRoom } = require('./models/ChatRoom')

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: true,
    credentials: true
  }
})

const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
  console.log('successfully connected to database')
}).catch((error) => {
  console.error(error)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}));

io.on('connection', (socket) => {
  socket.on('submitMessage', (payload) => {
    connect.then(database => {
      let chat = new Chat(payload);
      chat.save((error, doc) => {
        if (error) {
          console.error(error);
          io.emit('SocketError', { code: 'DatabaseError', message: '채팅 정보를 저장하는 과정에서 문제가 발생했습니다.', error })
        }
        Chat.findOne({ '_id': doc._id })
          .populate('writer')
          .exec((error, chat) => {
            if (error) {
              console.error(error);
              io.emit('SocketError', { code: 'DatabaseError', message: '채팅 정보를 찾는 과정에서 문제가 발생했습니다.', error })
            }
            io.emit('returnMessage', { message: '실시간 채팅 정보를 정상적으로 가져왔습니다.', chat })
            return { message: 'good' }
          })
      })
    })
  })

  socket.on('createChatRoom', (payload) => {
    connect.then(database => {
      const chatRoom = new ChatRoom(payload);
      chatRoom.save((error, doc) => {
        if (error) {
          console.error(error);
          return io.emit('SocketError', { code: 'DatabaseError', message: '채팅방 정보를 저장하는 과정에서 문제가 발생했습니다.', error })
        }
        ChatRoom.findOne({ '_id': doc._id })
          .populate('writer')
          .exec((error, chatRoom) => {
            if (error) {
              console.error(error);
              return io.emit('SocketError', { code: 'DatabaseError', message: '채팅방 정보를 불러오는 과정에서 문제가 발생했습니다.', error })
            }
            io.emit('returnChatRoom', { message: '채팅방이 정상적으로 생성되었습니다.', chatRoom, userId: payload.writer })
            return { message: 'good' }
          })
      })
    })
  })
})

app.use('/uploads', express.static('uploads'));
app.use('/api/user', require('./routes/user'));
app.use('/api/movie/favorite', require('./routes/movieFavorite'));
app.use('/api/jaymall', require('./routes/jaymall'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/chatRoom', require('./routes/chatRoom'));
app.use('/api/comment', require('./routes/comment'));


app.get('/', (req, res) => {
  res.send('successfully connected server-side app')
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
