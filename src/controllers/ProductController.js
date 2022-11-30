const Product = require('../models/Product')

module.exports = {
    async cadastraProduto (req,res)  {
    try{
        const { nome, descricao, preco } = req.body
        
        const product = await Product.findOne({where: {nome}})

        if(product){
            res.status(401).json({message:"Já existe um produto cadastrado!"})
        } else {
            const product = await Product.create({ nome, descricao, preco })
            res.status(200).json({message: "Produto cadastrado com sucesso!"})
        }
        

        
    }catch(err){
        res.status(400).json({err})
    }
},
    async atualizaProduto(req, res){
        const produto = req.body
    try {
        await Product.update({preco: produto.preco}, {
            where: {
                id: produto.id
            }
        })
        res.json({produto})
    } catch (e) {
        res.status(500).json({mensagem: 'Erro atualizando produto.'})
    }
    },
    async listaTodosProdutos(req, res) {
        try {
            const products = await Product.findAll({
                order: [['nome', 'ASC'], ['preco', 'ASC']]
            })
            if(!products) res.status(200).json({ message: "Não existem produtos cadastrados!"})
            res.status(200).json({ products })
        } catch(err){
            res.status(400).json({ err })
        }
        
    }
}