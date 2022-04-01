const { Model, DataTypes } = require('sequelize')
const flavours = require('../modules/flavours').flavours()

module.exports = database => {
  class Cones extends Model { }

  Cones.init(
    {

      cones_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },

    {
      sequelize: database,
      modelName: 'cones',
      logging: false,
      timestamps: false
    }
  )


  async function conesSetup() {
    await Cones.sync({ force: true });
  }

  async function coneSeed() {
    flavours.forEach(async (item) => {
      await Cones.create({
        cones_name: item
      })

    })
  }

  async function coneStart() {
    await conesSetup()
    await coneSeed()
  }

  coneStart()



  return Cones
}




