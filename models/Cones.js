
const { Model, DataTypes} = require('sequelize')

module.exports = database => {
  class Cones extends Model {}

  Cones.init(
    {
      name: {
        type: DataTypes.STRING,
        
      },

      vote: {
        type: DataTypes.INTEGER,
        
      },
    },

    {
      sequelize: database,
      modelName: 'cones',
      logging: false,
      timestamps: false
    }
  )

  return Cones
}




