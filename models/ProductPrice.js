const Sequelize = require('sequelize');
const db = require('./db')

const ProductPrice = db.define('preco_produto', {
    data: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    validade: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    referenciaImagem: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    obs: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
});

ProductPrice.sync()

module.exports = ProductPrice;