# 📦 DevWarehouse API

API RESTful construída em **Node.js** com **Express** e **MongoDB**, simulando o backend de um e-commerce. O projeto conta com autenticação de usuários, gerenciamento de produtos e cadastro de clientes.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🛠 Funcionalidades da API

- **Cadastro de usuário com senha criptografada (bcrypt)**
  - A API permite que um usuário se cadastre com um email e senha, que é criptografada com o algoritmo bcrypt
  - O registro do usuário é feito com o endpoint `/usuario`, que espera como parâmetro o email e senha do usuário
  - A API retorna um objeto com o id do usuário, email e mensagem de confirmação
- **Autenticação de usuário com geração de token JWT**
  - A API permite que um usuário se autentique com o endpoint `/usuario/login`, que espera como parâmetro o email e senha do usuário
  - Caso a autenticação seja válida, a API retorna um objeto com o token JWT, que é gerado com o id do usuário e uma chave secreta
  - O token é válido por 1 hora e pode ser utilizado para acessar rotas protegidas da API
- **Cadastro de clientes**
  - A API permite que um usuário cadastrado cadastre um cliente com o endpoint `/cadastro`, que espera como parâmetro o nome, sobrenome, CPF, celular e email do cliente
  - A API retorna um objeto com o id do cliente, nome, sobrenome, CPF, celular e email do cliente
- **CRUD completo de produtos**
  - A API permite que um usuário cadastrado cadastre, atualize, liste e delete produtos com os endpoints `/produtos`, `/produtos/:id`, `/produtos` e `/produtos/:id`, respectivamente
  - Os endpoints esperam como parâmetro o id do produto e/ou as informações do produto (nome, descrição, valor, imagem)
  - A API retorna um objeto com o id do produto, nome, descrição, valor e imagem do produto
- **Proteção de rotas (implementável com token JWT)**
  - A API permite que rotas sejam protegidas com o uso do token JWT, que é verificado em cada requisição para essas rotas
  - Caso o token seja inválido ou expirado, a API retorna um erro 401 (não autorizado)

---

## 📁 Estrutura de Pastas

```bash
src/
│
├── controllers/         # Lógica das requisições 
├── models/              # Modelos do Mongoose
├── routes/              # Rotas da aplicação
├── services/            # Regra de negócio da aplicação
└── index.js             # Ponto de entrada principal

# Como Executar a API DevWarehouse

Siga os passos abaixo para clonar o repositório, instalar as dependências e iniciar a aplicação localmente.

## Passos para Iniciar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/FelpsSantosx/api-devwarehouse.git
   cd api-devwarehouse
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```
   DB_USUARIO=seu_usuario_mongo
   DB_SENHA=sua_senha_mongo
   ```

4. **Inicie a aplicação:**

   ```bash
   node src/index.js
   ```

5. **A aplicação estará rodando em:**

   ```
   http://localhost:3000
   ```

## 📌 Endpoints Principais

| Método | Rota             | Descrição                      |
|--------|------------------|--------------------------------|
| POST   | /usuario/login   | Login do usuário (JWT)         |
| POST   | /cadastro        | Cadastro de cliente            |
| GET    | /cadastro        | Lista todos os clientes        |
| PUT    | /cadastro/:id    | Atualiza dados de cliente      |
| DELETE | /cadastro/:id    | Remove cliente                 |
| POST   | /produtos        | Cadastra novo produto          |
| GET    | /produtos        | Lista todos os produtos        |
| PUT    | /produtos/:id    | Atualiza produto               |
| DELETE | /produtos/:id    | Remove produto                 |
