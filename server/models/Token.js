
module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define("Token", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        serviceName: {
            type: DataTypes.STRING(255),  
            allowNull: false,
            unique: true,
        },
        jwtToken: {
            type: DataTypes.TEXT,  
            allowNull: true,
        },
        refreshToken: {
            type: DataTypes.TEXT,  
            allowNull: true,
        },
        feedToken: {
            type: DataTypes.TEXT,  
            allowNull: true,
        },
    });
    return Token;
};
