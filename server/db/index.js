'use strict';
const db = require('./db');
const chalk = require('chalk');
const Song = require('./models/song')
const Genre = require('./models/genre')

// Require our models. Running each module registers the model into sequelize
// so any other part of the application can simply call sequelize.model('User')
// to get access to the User model.
require('./models');

// Syncing all the models at once. This promise is used by main.js.
var syncedDbPromise = db.sync();


syncedDbPromise.then(function () {
  console.log(chalk.green('Sequelize models synced to PostgreSQL'));

  Song.findAll()
    .then(songs => {
      songs.forEach(song => {
        const genre = song.genre.trim();
          Genre.findOrCreate({
            where: {
              name: genre
            }
          })
          .then((genre) => {
            console.log('genre~~~', genre[0])
            song.setStation(genre[0].id)
          })
      })
    })

});

module.exports = syncedDbPromise;
