const express = require('express');
const app = express();
const db = require('./models/db');
const Product = require('./models/Product');
const Usuario = require('./models/Usuario');
const Categoria = require('./models/Categoria');
const ProductPrice = require('./models/ProductPrice');
const Concorrente = require('./models/Concorrente')

app.use(express.json())

app.get("/", async(req,res) => {
    res.send("Página inicial !!")
});

app.post("/cadastrarProduto", async (req,res) => {
    console.log(req.body)
    await db.sync();
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

app.post("/cadastrarUsuarios", async(req, res) => {
    console.log(req.body)
    await Usuario.create(req.body)
    .then(()=> {
        return res.json({
            error: false,
            message: "Usuario cadastrado com sucesso"
        })
    }).catch((err) => {
        return res.status(400).json({
            error:true,
            mensagem: err
        })
    })
});

app.get("/usuarios", async(req,res) => {
    const usuarios = await Usuario.findAll();
    console.log(usuarios.every(user => user instanceof Usuario)); 
    //console.log("Todos usuários:", JSON.stringify(usuarios, null, 2));
    res.json(usuarios)
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080")
})