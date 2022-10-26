const express = require('express')
const router = express.Router()

router.post("/cadastrarProduto", async (req,res) => {
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

module.exports = router;