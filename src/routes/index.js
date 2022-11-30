const { Router } = require('express')
const productController = require('../controllers/ProductController') 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const routes = Router();
const auth = require('../controllers/userAuth')
routes.get("/test", async(req,res) => {
    res.send("test.")
});

routes.use('/api-docs',swaggerUi.serve)
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

//produtos
routes.post('/produtos', productController.cadastraProduto)
routes.get('/produtos', productController.listaTodosProdutos)
routes.put('/produtos', productController.atualizaProduto)

//usuarios
routes.post('/login', auth.login);
routes.post('/signup', auth.signup)
routes.get('/private', auth.isAuth);
routes.get('/public', (req, res) => {
    res.status(200).json({ message: "página pública" });
});



routes.use('/', (req, res) => {
    res.status(404).json({error : "page not found"});
});

module.exports = routes