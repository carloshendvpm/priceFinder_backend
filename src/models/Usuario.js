const Sequelize = require('sequelize');
const db = require('../config/db')

const Usuario = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tipo: {
        type: Sequelize.STRING(15),
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
    }
});

Usuario.sync()

module.exports = Usuario;