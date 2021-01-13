const express = require('express');
const podcasts = express.Router();

const Podcast = require('../models/podcasts.js');

podcasts.get('/', (req, res) => {
  Podcast.find({}, (err, foundPodcast) => {
    res.json(foundPodcast)
  })
});

podcasts.post('/', (req, res) => {
  Podcast.create(req.body, (error, createdPodcast) => {
    Podcast.find({}, (err, foundPodcast) => {
      res.json(foundPodcast)
    })
  })
});

podcasts.put('/:id', (req, res) => {
  Podcast.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPodcast) => {
    if (err) {
      res.send(err)
    } else {
      Podcast.find({}, (err, foundPodcast) => {
        res.json(foundPodcast)
      })
    }
  })
});

podcasts.delete('/:id', (req, res) => {
  Podcast.findByIdAndRemove(req.params.id, (err, deletePodcast) => {
    Podcast.find({}, (err, foundPodcast) => {
      res.json(foundPodcast)
    })  
  })
})


module.exports = podcasts
