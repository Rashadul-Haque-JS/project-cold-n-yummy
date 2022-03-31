const {Model, DataTypes} = require('sequelize')


module.exports = database => {
    class Images extends Model{}
  
    Images.init(
      {
        imagesName: {
          type: DataTypes.BLOB,
          allowNull: false
        },
        
      },
      {
        sequelize: database,
        modelName: 'images',
          logging:false,
          underscored: true,
          timestamps:false
      }
    )

    const images = ['optimus_p.jpg', 'optimus_p.jpg', 'optimus_p.jpg','optimus_p.jpg','optimus_p.jpg','optimus_p.jpg','optimus_p.jpg','optimus_p.jpg','optimus_p.jpg','optimus_p.jpg']
    
    images.forEach(async(i) => {

        await Images.create({
            imagesName:`/images/${i}`
        })
    })
  
    return Images
  }