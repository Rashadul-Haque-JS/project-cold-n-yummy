const {Model, DataTypes} = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = database => {
    class RegCustomers extends Model{
      static async authenticate(regCustomersName, password){
        const regCustomers = await regCustomers.findOne({where: {regCustomersName}})
        if(!regCustomers){ 
          throw new Error('Invalid regCustomers name')
        }
        if(!bcrypt.compareSync(password, regCustomers.password_hash)){
          throw new Error('Invalid password')
        }      
        return regCustomers
      }
    }
  
    RegCustomers.init(
      {
        regCustomersName: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        password_hash: {
          type: DataTypes.TEXT,
          allowNull: false
        },
      },
      {
        sequelize: database,
        modelName: 'regCustomers',
        hooks: {
          beforeCreate(instance, options){
            instance.password_hash =  bcrypt.hashSync(instance.password_hash)
          }
          },
          logging:false,
          underscored: true,
          timestamps:false
      }
    )
  
    return RegCustomers
  }