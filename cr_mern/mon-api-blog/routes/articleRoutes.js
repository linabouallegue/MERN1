const express = require('express');
const router = express.Router();
const { testApi, createArticle, getAllArticles } = require('../controllers/articleController');

// 🧪 Route de test
router.get('/test', testApi);

// 📄 Récupérer tous les articles
router.get('/', getAllArticles);

// ➕ Créer un article
router.post('/', createArticle);

module.exports = router;
