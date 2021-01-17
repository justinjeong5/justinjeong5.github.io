const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatRoomSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  private: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true })

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema)

module.exports = { ChatRoom }