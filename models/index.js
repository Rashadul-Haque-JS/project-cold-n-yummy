const { sequelize } = require('../db/connection');
const setupMembers = require('./Members');
const setupVoters = require('./Voters');
const setupCones = require('./Cones');
const setupImages = require('./Images');

const Voters = setupVoters(sequelize);
const Cones = setupCones(sequelize);
const Members = setupMembers(sequelize);
const Images = setupImages(sequelize);

// Associations
Cones.hasMany(Voters, { foreignKey: 'coneId', sourceKey: 'id' });
Members.hasOne(Voters, { foreignKey: 'memberId', onDelete: 'CASCADE' });
Voters.belongsTo(Cones, { foreignKey: 'coneId', targetKey: 'id' });
Voters.belongsTo(Members, { foreignKey: 'memberId' });
Cones.hasOne(Images);
Images.belongsTo(Cones);


module.exports = { 
  Members, Voters, Cones, Images 
}