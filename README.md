<!-- // Comando npm init -y cria uma estrutura para o arquivo json  -->

<!-- npm i express sqlite3 swagger-ui-express jsdoc body-parser -- esse comando serve para baixar a pasta node modules, para poder usar as dependencias e arquivos necessários para a aplicação, além de baixar dependencias no arquivo package json e baixar o arquivo package lock json -->

# API de Notícias

Esta é uma API simples para gerenciar notícias, desenvolvida em Node.js. A API possui as operações básicas de CRUD.

## Funcionalidades

- Listar todas as notícias
- Obter uma notícia específica pelo ID
- Criar uma nova notícia
- Atualizar uma notícia existente
- Deletar uma notícia

## Endpoints

- `GET /news` - Listar todas as notícias
- `GET /news/{id}` - Obter uma notícia específica
- `POST /news` - Criar uma nova notícia
- `PUT /news/{id}` - Atualizar uma notícia
- `DELETE /news/{id}` - Deletar uma notícia

## Documentação

A documentação da API pode ser acessada em `/api-docs`.

## Instruções para Execução

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute a aplicação com `node src/app.js`.
4. Acesse a API em `http://localhost:3000/news`.

## Coleção do Postman

[Link para a coleção do Postman (exemplo)](https://www.postman.com/)

## Licença

Este projeto está licenciado sob a MIT License.