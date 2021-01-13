const mongoose = require('mongoose')

const podcastSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  favorite
})
