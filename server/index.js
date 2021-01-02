const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()

const mongoose = require('mongoose');

const uri = process.env.MONGO_URI
mongoose.connect(uri, {
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


app.use('/uploads', express.static('uploads'));
app.use('/api/user', require('./routes/user'));
app.use('/api/movie/favorite', require('./routes/movieFavorite'));
app.use('/api/jaymall', require('./routes/jaymall'));
app.use('/api/blog', require('./routes/blog'));


app.get('/', (req, res) => {
  res.send('successfully connected server-side app')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})