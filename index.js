const express = require('express');
const app = express();
const routes = require('./src/routes')
const db = require('./src/config/db');
const Product = require('./src/models/Product');
const Usuario = require('./src/models/Usuario');
const Categoria = require('./src/models/Categoria');
const ProductPrice = require('./src/models/ProductPrice');
const Concorrente = require('./src/models/Concorrente');

app.use(express.json())
app.use(routes)

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080")
})