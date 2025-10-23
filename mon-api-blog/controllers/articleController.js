const Article = require('../models/Article');

// Test API
const testApi = (req, res) => {
  res.status(200).json({
    message: 'Le test depuis le contrôleur a fonctionné 🎉',
    success: true
  });
};

// Créer un article
const createArticle = async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const savedArticle = await newArticle.save();
    res.status(201).json({
      message: '✅ Article créé avec succès !',
      article: savedArticle
    });
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de la création', error: err.message });
  }
};

// Lire tous les articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la lecture', error: err.message });
  }
};

module.exports = { testApi, createArticle, getAllArticles };
