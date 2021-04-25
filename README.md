# To DO API

&nbsp;

## 🙋‍♂ Apresentação:

API feita em Typescript, utilizando Express e TypeORM. A API conta com rotas para cadastro de usuário, login com geração de Token JWT, e CRUD para gerenciar os Todos.

&nbsp;

![alt text](https://i.imgur.com/YWDTUTk.gif)

&nbsp;

## 💻 Tecnologias utilizadas

- **typescript**
- **express**
- **typeorm**
- **postgresql**
- **jsonwebtoken**
- **bcryptjs**
- **cors**

&nbsp;

## ⚙️ Funcionalidades

Rota para criação de usuário;

Rota para autenticação, com geração de token JWT;

Rota autenticada para gerenciar os To dos: POST - Criar To do | GET - Listar To dos | PATCH - Alterar To do | DELETE - Remover To do.

&nbsp;

## 🔥️ Executando o projeto

Primeiro é necessário ter instalado o postgreSQL, e criado uma database com o nome todos-db.

Para alterar as configurações de conexão com o banco de dados basta abrir o arquivo ormconfig.json, que fica na raiz do projeto.

Para iniciar, usando o terminal, clone esse repositório em uma pasta com o comando:

```bash
git clone https://github.com/gabrielitba/ToDO-API.git
```

Instalando as dependências:

```bash
yarn
```

Rodando migrations

```bash
yarn typeorm migration:run
```

Para iniciar o server, basta digitar no terminal:

```bash
yarn start
```
