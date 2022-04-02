const { Model, DataTypes } = require('sequelize')



module.exports = database => {
    class Voters extends Model { }

Voters.init(
    {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {

    sequelize: database,
    modelName: 'voters',
    logging: false,
    timestamps: false
    }
)


    return Voters
}