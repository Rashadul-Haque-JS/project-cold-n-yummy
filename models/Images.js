const { Model, DataTypes } = require('sequelize')
const { imagesLit, imageList} = require('../modules/flavours')


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

  
  async function imgStup() {
    await Images.sync({ force: true })
    imageList.forEach(async (i) => {

      await Images.create({
        image_name: `/images/${i}`
      })
    })
  }
  imgStup()


  return Images
}