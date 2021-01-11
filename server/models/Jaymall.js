const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jaymallSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    maxLength: 100
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: 0
  },
  images: {
    type: Array,
    default: []
  },
  views: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  sort: {
    type: String,
  },
}, { timestamp: true })

jaymallSchema.index({
  title: 'text',
  description: 'text',
}, {
  weight: {
    title: 5,
    description: 1,
  }
})

const Jaymall = mongoose.model('Jaymall', jaymallSchema)

module.exports = { Jaymall }