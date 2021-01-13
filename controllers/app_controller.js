const express = require('express');
const podcasts =express.Router();

const Podcast = require('../models/podcasts.js');

podcasts.get('/', (req, res) => {
  res.send('first route')
});

podcasts.post('/', (req, res) => {
  Podcast.create(req.body, (error, createdPodcast) => {
    Podcast.find({}, (err, foundPocast) => {
      res.json(foundPocast)
    })
  })
});

podcasts.put('/:id', (req, res) => {
  Podcast.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPodcast) => {
    if (err) {
      res.send(err)
    } else {
      Podcast.find({}, (err, foundPocast) => {
        res.json(foundPocast)
      })
    }
  })
});

podcast.delete('/:id', (req, res) => {
  
})

module.exports = podcasts
