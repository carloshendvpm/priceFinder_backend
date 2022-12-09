require('dotenv').config()
const Sequelize = require('sequelize');
const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

const execute = async (query) => {
    try {
        await client.connect();     
        await client.query(query);  
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();         
    }
};
const text = `
        CREATE DATABASE IF NOT EXISTS precosmix
    );`;
  
  execute(text).then(result => {
    if (result) {
        console.log('Database criado');
    }
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.authenticate()
.then(() => {
    console.log("Conexão feita com sucesso")
}).catch(() => {
    console.log("Erro conexão ao banco não foi feita")
})
module.exports = sequelize;
