const { Router } = require('express')
const productController = require('../controllers/ProductController') 

const router = Router();

router.get("/", async(req,res) => {
    res.send("Página inicial !!")
});

router.post("/cadastrarProduto", productController.cadastraProduto)

router.post("/cadastrarUsuarios", async(req, res) => {
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

router.get("/usuarios", async(req,res) => {
    const usuarios = await Usuario.findAll();
    console.log(usuarios.every(user => user instanceof Usuario)); 
    //console.log("Todos usuários:", JSON.stringify(usuarios, null, 2));
    res.json(usuarios)
})

router.delete("/excluirUsuario", async(req,res) => {
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


module.exports = router