const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = database => {
    class UnRegCustomers extends Model { }

    UnRegCustomers.init(
        {
            email: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            sequelize: database,
            modelName: 'unRegCustomers',

            logging: false,
            underscored: true,
            timestamps: false
        }
    )

    return UnRegCustomers
}