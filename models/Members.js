const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = database => {
  class Members extends Model {
    static async authenticate(email, password) {
      const members = await Members.findOne({ where: { email } })
      if (!members) {
        throw new Error('Invalid members name')
      }
      if (!bcrypt.compareSync(password, members.password_hash)) {
        throw new Error('Invalid password')
      }
      return members
    }
  }

  Members.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize: database,
      modelName: 'members',
      logging: false,
      hooks: {
        beforeCreate(instance, options) {
          instance.password_hash = bcrypt.hashSync(instance.password_hash)
        }
      },
      logging: false,
      timestamps: false
    }
  )


  return Members
}