const Sequelize = require('sequelize')
const setupMembers = require('./Members')
const setupVoters = require('./Voters')
const setupCones = require('./Cones')
const setupImages = require('./Images')


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './yummy.sqlite'
})


const Voters = setupVoters(sequelize)
const Cones = setupCones(sequelize)
const Members = setupMembers(sequelize)
const Images = setupImages(sequelize)

// Associations
Cones.hasMany(Voters, { foreignKey: 'coneId', sourceKey:'id' });
Voters.belongsTo(Cones, { foreignKey: 'coneId', targetKey: 'id' });
Cones.hasOne(Images);
Images.belongsTo(Cones);



module.exports = { Members, Voters, Cones, Images }