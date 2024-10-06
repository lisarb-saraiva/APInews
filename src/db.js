// src/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./news.db');

// Criação da tabela de notícias
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`);
});

module.exports = db;