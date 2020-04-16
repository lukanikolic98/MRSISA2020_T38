module.exports = (sequelize, DataTypes) =>
    sequelize.define("Pacient", {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        phone: DataTypes.STRING,
        lbo: {
            type: DataTypes.STRING,
            unique: true
        }
    })