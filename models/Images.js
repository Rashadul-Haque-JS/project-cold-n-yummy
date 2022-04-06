
const { Model, DataTypes } = require('sequelize')


module.exports = database => {
  class Images extends Model { }

  Images.init(
    {
     

      image_name: {
        type: DataTypes.BLOB,
        allowNull: false
      },

    },
    {
      sequelize: database,
      modelName: 'images',
      logging: false,
      timestamps: false
    }
  )



  return Images
}