const mongoose = require('mongoose')

const podcastSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  description: String
})

const Podcast = mongoose.model('Podcast', podcastSchema)

module.exports = Animal
