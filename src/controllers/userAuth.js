

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

module.exports = {
        async signup (req, res, next) {
            try {
                    // checks if email already exists
                    Usuario.findOne({ where : {
                        email: req.body.email, 
                    }})
                    .then(dbUser => {
                        if (dbUser) {
                            return res.status(409).json({message: "email já existente"});
                        } else if (req.body.email && req.body.password) {
                            // password hash
                            bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
                                if (err) {
                                    return res.status(500).json({message: "não foi possível fazer o hash da senha"}); 
                                } else if (passwordHash) {
                                    return Usuario.create(({
                                        email: req.body.email,
                                        nome: req.body.name,
                                        password: passwordHash,
                                    }))
                                    .then(() => {
                                        res.status(200).json({message: "usuario criado"});
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        res.status(502).json({message: "erro enquanto usuario estava sendo usuario"});
                                    });
                                };
                            });
                        } else if (!req.body.password) {
                            return res.status(400).json({message: "Senha não informada"});
                        } else if (!req.body.email) {
                            return res.status(400).json({message: "Email não informado"});
                        };
                    })
            }catch(err) {
                res.status(400).json({ err })
            }

},

async login (req, res, next) {
    try{
        Usuario.findOne({ where : {
            email: req.body.email, 
        }})
        .then(dbUser => {
            if (!dbUser) {
                return res.status(404).json({message: "usuario não encontrado"});
            } else {
                // password hash
                bcrypt.compare(req.body.password, dbUser.password, (err, compareRes) => {
                    if (err) { // error while comparing
                        res.status(502).json({message: "error enquanto checava a senha do usuario "});
                    } else if (compareRes) { // password match
                        const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
                        res.status(200).json({message: "usuario logado", "token": token});
                    } else { // password doesnt match
                        res.status(401).json({message: "credenciais inválidas"});
                    };
                });
            };
        })
    }catch(err) {
        res.status(400).json({ err })
    }
},
async isAuth (req, res, next)  {
    try {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            return res.status(401).json({ message: 'Não autenticado' });
        };
        const token = authHeader.split(' ')[1];
        let decodedToken; 
        try {
            decodedToken = jwt.verify(token, 'secret');
        } catch (err) {
            return res.status(500).json({ message: err.message || 'Não foi possível decodificar o token' });
        };
        if (!decodedToken) {
            res.status(401).json({ message: 'unauthorized' });
        } else {
            res.status(200).json({ message: 'here is your resource' });
        };
    }catch(err){
        res.status(400).json({ err })
    }
    

}
}
