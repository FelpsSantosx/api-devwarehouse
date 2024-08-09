const Produto = require('../models/produto')

class ProdutoService {
    async create(data) {
        const produto = new Produto(data)
        return await produto.save()
    }

    async list() {
        return await Produto.find()
    }

    async update(id, data) {
        return await Produto.findByIdAndUpdate(id, data, { new:true })
    }

    async delete(id) {
        return await Produto.findByIdAndDelete(id)
    }
}

module.exports = new ProdutoService()