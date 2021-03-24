const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/gamerworld'
mongoose.connect(url, {useNewUrlParser: true})

module.exports = mongoose