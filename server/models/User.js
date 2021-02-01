const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  lastname: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 6,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  cart: {
    type: Array,
    default: [],
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
})

//============================================
//                  bcryptjs
//============================================
userSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next()
      });
    });
  } else {
    next()
  }
})

userSchema.methods.comparePassword = function (plainPassword, callback) {
  var user = this;
  bcrypt.compare(plainPassword, user.password, function (err, isMatch) {
    if (err) {
      console.error(err)
      return callback(err);
    }
    callback(null, isMatch);
  })
}

//============================================
//               jsonWebToken
//============================================
userSchema.methods.generateToken = function (callback) {
  var user = this;
  var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2), // 2days for expiration
    data: user._id.toHexString()
  }, process.env.SECRET_OR_PRIVATE_KEY);
  user.token = token;
  user.save(function (err, user) {
    if (err) {
      console.error(err)
      return callback(err);
    }
    callback(null, user);
  })
}

userSchema.statics.findByToken = function (token, callback) {
  var user = this;
  jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY, function (err, decoded) {
    if (err) {
      console.error(err)
      return callback(err);
    }
    user.findOne({
      "_id": decoded.data,
      "token": token
    }, function (err, user) {
      if (err) {
        console.error(err)
        return callback(err);
      }
      callback(null, user);
    })
  })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }