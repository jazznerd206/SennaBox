module.exports = (sequelize, DataTypes) => {
    const Box = sequelize.define('Box', {
        boxname: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        moistureLevel: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    })
    return Box;
}