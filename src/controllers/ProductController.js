const Product = require('../models/Product')

module.exports = {
    async cadastraProduto (req,res)  {
    try {
        await Product.create(req.body)
        return res.json({
            error: false,
            message:"Produto cadastrado com sucesso!",
        })
    }catch(err) {
        return res.status(400).json({
            error:true,
            mensagem:err,
        })
    }
}
}