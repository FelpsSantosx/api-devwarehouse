const Cadastro = require('../models/cadastro')

class CadastroService {
    async create(data) {
        const cadastro = new Cadastro(data)
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