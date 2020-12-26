const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
  },
  title: {
    type: String,
  },
  files: {
    type: Array,
    default: [],
  }
}, { timestamps: true })

const Blog = mongoose.model('Blog', blogSchema)

module.exports = { Blog }