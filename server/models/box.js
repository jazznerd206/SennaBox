module.exports = (sequelize, DataTypes) => {
    const Box = sequelize.define('Box', {
        boxName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        currentMoistureLevel: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        moistureHistory: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            defaultValue: []
        },
        plantType: {
            type: DataTypes.STRING,
        }
    })
    return Box;
}