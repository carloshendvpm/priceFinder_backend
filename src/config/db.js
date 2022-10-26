require('dotenv').config()
const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()
.then(() => {
    console.log("Conexão feita com sucesso")
}).catch(() => {
    console.log("Erro conexão ao banco não foi feita")
})
module.exports = sequelize;
