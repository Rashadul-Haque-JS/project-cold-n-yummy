const Sequelize = require('sequelize')
const setupMembers = require('./Members')
const setupVoters = require('./Voters')
const setupCones = require('./Cones')
const setupImages = require('./Images')


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './yummy.sqlite'
})

const Members = setupMembers(sequelize)
const Voters = setupVoters(sequelize)
const Cones = setupCones(sequelize)
const Images = setupImages(sequelize)

Cones.hasOne(Voters);
Voters.belongsTo(Cones);
// Cones.hasOne(Images);
// Images.belongsTo(Cones)

module.exports = { Members, Voters, Cones, Images }