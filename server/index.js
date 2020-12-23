const express = require('express');
const app = express();
const config = require('./config/key')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
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
  credentials: true,  // for cookie
}));

app.use('/api/user', require('./routes/user'));
app.use('/api/movie/favorite', require('./routes/movieFavorite'));
app.use('/api/jaymall', require('./routes/jaymall'));
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
  res.send('successfully connected server-side app')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})