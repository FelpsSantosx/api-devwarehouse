const mongoose = require('mongoose')
const { Schema } = mongoose

const CadastroShema = mongoose.Schema({
    nome: String,
    sobrenome: String,
    datadenascimento: String,
    cpf: String,
    celular: String,
    email: String,
    senha: String,
})

module.exports = mongoose.model('Cadastro', CadastroShema)