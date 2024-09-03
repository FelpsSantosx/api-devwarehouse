const Cadastro = require('../models/cadastro')

class CadastroService {
    async create(data) {
        const cadastro = new Cadastro(data)

        // Criar Validaçãoe 
        const {nome, sobrenome, cpf, celular, email, senha, confirmasenha} = data

        if(!nome) {
            return res.status(422).json({ msg: 'o nome é obrigatorio'})
        }
        

        return await cadastro.save()
    }

    async list() {
        return await Cadastro.find()
    }

    async update(id, data) {
        return await Cadastro.findByIdAndUpdate(id, data, { new: true })
    }

    async delete(id) {
        return await Cadastro.findByIdAndDelete(id)
    }
}

module.exports = new CadastroService()