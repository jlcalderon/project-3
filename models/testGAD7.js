module.exports = function(sequelize, DataTypes) {
    var testGAD7 = sequelize.define("testGAD7", {
        feelig: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        control: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        worrying: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        trouble: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        restless: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        annoyed: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        affraid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0
        },
        dateofGAD7: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return testGAD7;
}