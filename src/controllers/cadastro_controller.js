const CadastroService = require('../services/cadastro_service')

class CadastroController {

    async create(req, res) {
        const cadastro = await CadastroService.create(req.body)
        res.send(cadastro)
    }

    async list(req, res) {
        const cadastros = await CadastroService.list()
        res.send(cadastros)
    }

    async update(req, res) {
        const cadastro = await CadastroService.update(req.params.id, req.body)
        res.send(cadastro)
    }

    async delete(req, res) {
        const cadastro = await CadastroService.update(req.params.id)
        res.send(cadastro)
    }

}

module.exports = new CadastroController()