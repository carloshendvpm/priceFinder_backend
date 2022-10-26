const Usuario = require('../models/Usuario')

module.exports = {
    async cadastraUsuario (req,res)  {
    try {
        const { tipo, nome, email  } = req.body
        
        const usuario = await Usuario.findOne({where: {email}})

        if(usuario){
            res.status(401).json({message:"Já existe um usuario com este email!"})
        } else {
            const usuario = await Usuario.create({ tipo, nome, email })
            res.status(200).json({message: "Usuário cadastrado com sucesso!"})
        }
    }catch(err){
        res.status(400).json({message:err})
    }
},
    async atualizaUsuario(req, res){
        try{
            const { id } = req.params
            const { tipo,nome, email } = req.body
    
            const usuario = await Usuario.findOne({where: { id }})
    
            if(!usuario){
                res.status(401).json({message:"Nenhum usuário encontrado"})
            }else {
                const usuario = await Usuario.update({tipo, nome, email}, {where: { id } })
    
                res.status(200).json({ usuario })
            }
    
        } catch(err){
            res.status(400).json({ message: err })
        }
      
    },
    async listaUsuarios(req, res) {
        try {
            const usuario = await Usuario.findAll()

            if(!usuario){
                res.status(200).json({ message: "Não existem usuários cadastrados!"})
            }
            res.status(200).json({ usuario })
        } catch(err){
            res.status(400).json({ err })
        }
        
    },
    async deletaUsuarios(req, res) {
            const { id } = req.params
            const usuario = await Usuario.findOne({where: {id}}) 
            if(!usuario){
                res.status(200).json({ message: "Usuário não encontrado!"})
            }else {
                await Usuario.destroy({where: {id}})
                res.status(200).json({ok: true}) 
            }
        }
}