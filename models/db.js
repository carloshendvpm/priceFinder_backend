const Sequelize = require('sequelize');

const sequelize = new Sequelize("precosmix", "root", "carlosH2462", {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()
.then( () => {
    console.log("Conexão feita com sucesso")
}).catch( () => {
    console.log("Erro conexão ao banco não foi feita")
})
module.exports = sequelize;
