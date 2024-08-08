const mongoose = require('mongoose')
const { Schema } = mongoose


const ProdutoSchema = mongoose.Schema({
    produto: String,
    descricao: String,
    valor: Number,
    image_url: String
})

module.exports = mongoose.model('Produto', ProdutoSchema)
