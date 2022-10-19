const express = require('express');
const app = express();
const db = require('./models/db');
const Product = require('./models/Product');
const Usuario = require('./models/Usuario');
const Categoria = require('./models/Categoria');
const ProductPrice = require('./models/ProductPrice')

app.use(express.json())

app.get("/", async(req,res) => {
    res.send("Página inicial !!")
});

app.post("/cadastrarProduto", async (req,res) => {
    console.log(req.body)

    await Product.create(req.body)
    .then(() => {
        return res.json({
            error: false,
            message:"Produto cadastrado com sucesso!",
        })
    }).catch((err) => {
        return res.status(400).json({
            error:true,
            mensagem:err,
        })
    })

})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080")
})