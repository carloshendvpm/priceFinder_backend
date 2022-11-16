const Sequelize = require('sequelize');
const db = require('../config/db')

const Usuario = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING(45),
        allowNull: true,
    }
});

Usuario.sync()

module.exports = Usuario;