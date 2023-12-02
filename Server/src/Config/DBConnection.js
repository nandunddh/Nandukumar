const mongoose = require('mongoose')
const { DATABASE_URL } = require('../Constants/constants')

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection Success')
  })
  .catch((err) => {
    console.log(err.message)
  })
