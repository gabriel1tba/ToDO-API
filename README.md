# To DO API

&nbsp;

## 🙋‍♂ Apresentação:

API feita em Typescript, utilizando Express e TypeORM. A API conta com rotas para cadastro de usuário, login com geração de Token JWT, e CRUD para gerenciar os Todos.

&nbsp;

![alt text](https://i.imgur.com/WWCSOZ4.png)

&nbsp;

## 💻 Tecnologias utilizadas

- **typescript**
- **eslint**
- **prettier**
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

Rotas para operações de CRUD (post, get, patch e delete) nos Todos.

&nbsp;

## 🔥️ Executando o projeto

Primeiro é necessário ter instalado o postgreSQL, e criar uma database com o nome todos-db.

Para alterar as configurações de conexão com o banco de dados basta abrir o arquivo ormconfig.json, que fica na raiz do projeto.

Para iniciar, usando o terminal, clone esse repositório em uma pasta com o comando:

```bash
git clone https://github.com/gabrielitba/ToDO-API.git
```

Instalando as dependências:

```bash
yarn
```

Para iniciar digite no terminal:

```bash
yarn start
```
