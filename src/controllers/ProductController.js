const Product = require('../models/Product')

module.exports = {
    async cadastraProduto (req,res)  {
    try{
        const { nome, descricao } = req.body
        
        const product = await Product.findOne({where: {nome}})

        if(product){
            res.status(200).json({message:"Já existe um produto cadastrado!"})
        } else {
            const product = await Product.create({ nome, descricao })
            res.status(200).json({message: "Produto cadastrado com sucesso!"})
        }
        

        
    }catch(err){
        res.status(400).json({err})
    }
}
}