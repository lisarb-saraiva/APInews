// src/models/news.js
const db = require('../db');

// Função para criar uma nova notícia
function createNews(news, callback) {
  const { title, body, author } = news;
  db.run('INSERT INTO news (title, body, author) VALUES (?, ?, ?)', [title, body, author], function(err) {
    callback(err, { id: this.lastID, title, body, author });
  });
}

// Funções para ler, atualizar e deletar notícias
function getAllNews(callback) {
  db.all('SELECT * FROM news', callback);
}

function getNewsById(id, callback) {
  db.get('SELECT * FROM news WHERE id = ?', [id], callback);
}

function updateNews(id, news, callback) {
  const { title, body, author } = news;
  db.run('UPDATE news SET title = ?, body = ?, author = ? WHERE id = ?', [title, body, author, id], callback);
}

function deleteNews(id, callback) {
  db.run('DELETE FROM news WHERE id = ?', [id], callback);
}

module.exports = { createNews, getAllNews, getNewsById, updateNews, deleteNews };