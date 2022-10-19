const Sequelize = require('sequelize');
const db = require('./db')

const Usuario = db.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tipoUsuario: {
        type: Sequelize.STRING(15),
        allowNull: false,
    },
    nomeUsuario: {
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