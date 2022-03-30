const {Model, DataTypes} = require('sequelize')


module.exports = database => {
    class IceCreams extends Model{}
  
    IceCreams.init(
      {
        iceCreamsName: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        vote_count: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      },
      {
        sequelize: database,
        modelName: 'iceCreams',
        logging:false,
        underscored:true,
        timestamps:false
      }
    )
  
    return IceCreams
  }