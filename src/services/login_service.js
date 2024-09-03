const cadastroUsuario = require('../models/cadastro')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');;

class UsuarioService {

    async createUser(data) {
        // Criar hash de senha
        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(data.senha, salt)

        data.senha = senhaHash;

        const newUser = new cadastroUsuario(data)
        return await newUser.save()
    }


    async loginUsuario(email, senha) {

        const usuario = await cadastroUsuario.findOne({ email })

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if (!senhaValida) {
            throw new Error('Senha inválida.');
        }

        const token = jwt.sign({ id: usuario._id }, 'secrettoken', { expiresIn: '1h' });
        return token;

    }

}

module.exports = new UsuarioService()