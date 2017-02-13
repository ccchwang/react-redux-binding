'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('genre', {
  name: {
    type: DataTypes.STRING(1e4), // eslint-disable-line new-cap
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  }
})
