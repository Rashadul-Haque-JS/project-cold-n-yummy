const {Model, DataTypes} = require('sequelize')


module.exports = database => {
    class IceCreams extends Model{}
  
    IceCreams.init(
      {
        iceCreamsName: {
          type: DataTypes.STRING,unique:true,
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
  
    const items = [{name:'Strawberry', votes:0},{name:'Banan',  votes:0},{name:'Orange', votes:0}]

    items.forEach(async (item) => {
       
        await IceCreams.create({
            iceCreamsName:item.name,
          
            vote_count:item.votes
            

        })
      
    })
  
  
    return IceCreams
  }