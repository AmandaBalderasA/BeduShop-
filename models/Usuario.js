const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate:{
            isLowercase: true
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    direccion: {
        type: DataTypes.TEXT
    },
    tarjeta: {
        type: DataTypes.TEXT,
        validate:{
            len: 16,
        }
    },
    tipo: {
        type: DataTypes.TEXT,
        validate:{
            isIn: [['Comprador', 'Vendedor']]
        }
    }
},
{
    freezeTableName: false,
    timestamps: false
}
);

module.exports = Usuario;