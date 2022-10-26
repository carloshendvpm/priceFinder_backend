const Sequelize = require('sequelize');
const db = require('../config/db')

const Categoria = db.define('Categoria', {
    idCategoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
});

Categoria.sync()

module.exports = Categoria;