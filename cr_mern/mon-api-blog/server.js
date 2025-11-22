require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
const PORT = 3000;

// Connexion à MongoDB
connectDB();

// Middleware pour lire le JSON
app.use(express.json());

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Serveur et MongoDB fonctionnent parfaitement 🚀');
});

// Utilisation des routes d’articles
app.use('/api/articles', articleRoutes);

// Démarrage du serveur
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
