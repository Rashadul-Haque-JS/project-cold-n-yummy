const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = database => {
  class Members extends Model {
    static async authenticate(membersName, password) {
      const members = await members.findOne({ where: { membersName } })
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
      member_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      email: {
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
      modelName: 'members',
      hooks: {
        beforeCreate(instance, options) {
          instance.password_hash = bcrypt.hashSync(instance.password_hash)
        }
      },
      logging: false,

      timestamps: false
    }
  )

  async function memberSetup() {
    await Members.sync({ force: true });
  }
  memberSetup()

  return Members
}