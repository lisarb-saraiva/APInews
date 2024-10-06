// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const newsRoutes = require('./routes/newsRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/news', newsRoutes);

// Documentação Swagger
const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'API de Notícias',
    description: 'API para gerenciar notícias',
  },
  paths: {
    '/news': {
      get: {
        summary: 'Listar todas as notícias',
        responses: {
          200: { description: 'Sucesso' },
        },
      },
      post: {
        summary: 'Criar uma nova notícia',
        responses: {
          201: { description: 'Criado' },
        },
      },
    },
    '/news/{id}': {
      get: {
        summary: 'Obter uma notícia específica',
        responses: {
          200: { description: 'Sucesso' },
          404: { description: 'Não encontrado' },
        },
      },
      put: {
        summary: 'Atualizar uma notícia',
        responses: {
          200: { description: 'Atualizado' },
        },
      },
      delete: {
        summary: 'Deletar uma notícia',
        responses: {
          204: { description: 'Sem conteúdo' },
        },
      },
    },
  },
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});