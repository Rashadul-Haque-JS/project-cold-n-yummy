const Sequelize = require('sequelize')
const setupRegCustomers = require('./RegCustomers')
const setupUnRegCustomers = require('./UnRegCustomers')
const setupIceCreams = require('./IceCreams')
const setupImages = require('./Images')


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './yummy.sqlite'
})

const RegCustomers = setupRegCustomers(sequelize)
const UnRegCustomers = setupUnRegCustomers(sequelize)
const IceCreams = setupIceCreams(sequelize)
const Images = setupImages(sequelize)

IceCreams.hasMany(RegCustomers);
RegCustomers.belongsTo(IceCreams);
IceCreams.hasMany(UnRegCustomers);
UnRegCustomers.belongsTo(IceCreams)
IceCreams.hasOne(Images);
Images.belongsTo(IceCreams)

module.exports = { RegCustomers,UnRegCustomers , IceCreams ,Images}