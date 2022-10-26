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

// app.post("/cadastrarProduto", async (req,res) => {
//     console.log(req.body)
//     await Product.create(req.body)
//     .then(() => {
//         return res.json({
//             error: false,
//             message:"Produto cadastrado com sucesso!",
//         })
//     }).catch((err) => {
//         return res.status(400).json({
//             error:true,
//             mensagem:err,
//         })
//     })
// })

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

app.delete("/excluirUsuario", async(req,res) => {
    const nomeUsuario = req.body.nomeUsuario;
    await Usuario.destroy({
        where:{
            nomeUsuario,
        }
    }).then(() => {
        return res.json({
            error:false,
            message:"Usuário removido com sucesso"
        })
    }).catch((err) => {
        return res.json({
            error: true,
            message:err
        })
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080")
})