const Sequelize = require('sequelize')
const db = require('../db')

const Favorite = db.define('favorite', {
  gameId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  }
})

module.exports = Favorite
