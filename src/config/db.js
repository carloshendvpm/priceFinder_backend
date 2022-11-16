require('dotenv').config()
const Sequelize = require('sequelize');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  
  // Run create database statement
  connection.query(
    `CREATE DATABASE IF NOT EXISTS precosmix`,
    function (err, result) {
        if(err) throw err
        console.log("Database criado")
    }
  );
  
  // Close the connection
connection.end();
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
