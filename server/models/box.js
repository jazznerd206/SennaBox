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
        },
        // look for data code here?
        // open gpio connection, query data pin, send results to file
    })  
    return Box;
}