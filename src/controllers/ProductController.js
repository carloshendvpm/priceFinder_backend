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
        try{
            const { id } = req.params
            const { nome, descricao } = req.body
    
            const product = await Product.findOne({where: { id }})
    
            if(!product){
                res.status(401).json({message:"Nenhum produto encontrado"})
            }else {
                const product = await Product.update({nome, descricao}, {where: { id } })
    
                res.status(200).json({ product })
            }
    
        } catch(err){
            res.status(400).json({ err })
        }
      
    },
    async listaTodosProdutos(req, res) {
        try {
            const products = await Product.findAll({
                order: [['nome', 'ASC']]
            })
            if(!products) res.status(200).json({ message: "Não existem produtos cadastrados!"})
            res.status(200).json({ products })
        } catch(err){
            res.status(400).json({ err })
        }
        
    }
}