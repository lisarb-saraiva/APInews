// src/controllers/newsController.js
const News = require('../models/news');

// Controlador para criar uma nova notícia
exports.createNews = (req, res) => {
  News.createNews(req.body, (err, news) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(news);
  });
};

// Controlador para listar todas as notícias
exports.getAllNews = (req, res) => {
  News.getAllNews((err, news) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(news);
  });
};

// Controlador para obter uma notícia específica
exports.getNewsById = (req, res) => {
  const { id } = req.params;
  News.getNewsById(id, (err, news) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!news) return res.status(404).json({ message: 'Notícia não encontrada' });
    res.status(200).json(news);
  });
};

// Controlador para atualizar uma notícia
exports.updateNews = (req, res) => {
  const { id } = req.params;
  News.updateNews(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Notícia atualizada com sucesso' });
  });
};

// Controlador para deletar uma notícia
exports.deleteNews = (req, res) => {
  const { id } = req.params;
  News.deleteNews(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).send();
  });
};