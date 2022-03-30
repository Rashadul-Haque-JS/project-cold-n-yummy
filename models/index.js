const Sequelize = require('sequelize')
const setupRegCustomers = require('./RegCustomers')
const setupUnRegCustomers = require('./UnRegCustomers')
const setupIceCreams = require('./IceCreams')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './yummy.sqlite'
})

const RegCustomers = setupRegCustomers(sequelize)
const UnRegCustomers = setupUnRegCustomers(sequelize)
const IceCreams = setupIceCreams(sequelize)

IceCreams.hasMany(RegCustomers);
IceCreams.hasMany(UnRegCustomers);
RegCustomers.belongsTo(IceCreams);
UnRegCustomers.belongsTo(IceCreams)

module.exports = { RegCustomers,UnRegCustomers , IceCreams }