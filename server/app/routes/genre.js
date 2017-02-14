'use strict';

const express = require('express');
const router = express.Router();
const mime = require('mime');
const chalk = require('chalk');
const urlParse = require('url').parse;
const models = require('../../db/models');
const Genre = models.Genre;
const Song = models.Song;
const Album = models.Album;
const request = require('request');
const musicMetadata = require('musicmetadata')
const fs = require('fs')

module.exports = router;

//GET /api/genre
router.get('/', function (req, res, next) {
  Genre.findAll({ where: req.query })
  .then(genres => res.json(genres))
  .catch(next);
});

//GET /API/genre/:id/songs
router.get('/:id/songs', function (req, res, next) {
  const genreId = +req.params.id;

  Song.scope('defaultScope', 'populated').findAll({
    where: {
      stationId: genreId
    },
    include: [Album]
  })
  .then(songs => res.json(songs))
  .catch(next);
});
