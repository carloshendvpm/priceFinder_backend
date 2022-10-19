const Sequelize = require('sequelize');
const db = require('./db')

const Concorrente = db.define('concorrente', {
    nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    cnpj: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true,
    },
    endereco: {
        type: Sequelize.STRING(80),
    }
});

Concorrente.sync()

module.exports = Concorrente;