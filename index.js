const express = require('express');
const app = express();
const routes = require('./src/routes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.use(express.json())
app.use(routes)


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080")
})