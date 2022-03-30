const {Model, DataTypes} = require('sequelize')


module.exports = database => {
    class Images extends Model{}
  
    Images.init(
      {
        imagesName: {
          type: DataTypes.TEXT,
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
  
    return Images
  }