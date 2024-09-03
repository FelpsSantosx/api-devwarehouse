const usuarioService = require('../services/login_service')


class loginController {

    async resgistroUsuario(req, res) {
        const usuario = await usuarioService.createUser(req.body)

        usuario ? res.status(201).json({ message: 'Usuário criado com sucesso!', usuario })
            : res.status(400).json({ error: 'Erro ao criar usuário' });

        res.send(usuario)
    }

    async loginUsuario(req,res) {
        const {email, senha} = req.body
        const token = await usuarioService.loginUsuario(email, senha)

        token ? res.status(400).json({ error: token.message }) 
        : res.status(200).json({ message: 'Login realizado com sucesso!', token });

        res.send(token)
    }

}

module.exports = new loginController()