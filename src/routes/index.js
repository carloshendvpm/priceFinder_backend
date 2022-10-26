const { Router } = require('express')
const productController = require('../controllers/ProductController') 
const usuarioController = require('../controllers/UsarioController')

const routes = Router();

routes.get("/", async(req,res) => {
    res.send("test.")
});

//produtos
routes.post("/cadastrarProduto", productController.cadastraProduto)
routes.put('/atualizar-produto/:id', productController.updateProduct)

//usuarios
routes.post('/cadastrar-usuario', usuarioController.cadastraUsuario)
routes.get('/listar-usuarios', usuarioController.listaUsuarios)
routes.put('/atualizar-usuario', usuarioController.atualizaUsuario)
routes.delete('/deleta-usuario/:id', usuarioController.deletaUsuarios)

module.exports = routes