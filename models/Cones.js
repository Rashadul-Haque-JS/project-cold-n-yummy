
const { Model, DataTypes} = require('sequelize')

module.exports = database => {
  class Cones extends Model {}

  Cones.init(
    {
      name: {
        type: DataTypes.STRING,
        
      },

      vote_count: {
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




