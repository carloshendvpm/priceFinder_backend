const { Router } = require('express')
const productController = require('../controllers/ProductController') 
const usuarioController = require('../controllers/UsarioController')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const routes = Router();

routes.get("/test", async(req,res) => {
    res.send("test.")
});

routes.use('/api-docs',swaggerUi.serve)
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

//produtos
routes.post('/cadastrarProduto', productController.cadastraProduto)
routes.get('/listar-produtos', productController.listaTodosProdutos)
routes.put('/atualizar-produto/:id', productController.atualizaProduto)

//usuarios
routes.post('/cadastrar-usuario', usuarioController.cadastraUsuario)
routes.get('/listar-usuarios', usuarioController.listaUsuarios)
routes.put('/atualizar-usuario', usuarioController.atualizaUsuario)
routes.delete('/deleta-usuario/:id', usuarioController.deletaUsuarios)

module.exports = routes