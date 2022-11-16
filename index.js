const express = require('express');
const app = express();
const routes = require('./src/routes');
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res,next) => {
    res.header("Acess-Control-Allow-Origin", "*")
    res.header("Acess-Control-Allow-Methods", "GET, PUT, POST DELETE")
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    app.use(cors())
    next();
});
app.use(routes)


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080")
})