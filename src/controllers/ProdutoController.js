const ProdutoService = require('../services/ProdutoService')

class ProdutoController {

    async create(req, res) {
        const produto = await ProdutoService(req.body)
        res.send(produto)
    }

    async list(req, res) {
        const produtos = await ProdutoService.list()
        res.send(produtos)
    }

    async update(req, res) {
        const produto = await ProdutoService.update(req.params.id, req.body)
        res.send(produto)
    }

    async delete(req, res) {
        const produto = await ProdutoService.delete(req.params.id)
        res.send(produto)
    }

}

module.export = new ProdutoController()

