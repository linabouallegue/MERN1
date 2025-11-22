// routes/userRoutes.js

const express = require('express');
const router = express.Router();

// Importer les fonctions du contrôleur
const { getAllUsers, createUser } = require('../controllers/userController');

// Définir les routes
router.get('/', getAllUsers);   // Pour afficher tous les utilisateurs
router.post('/', createUser);   // Pour créer un utilisateur

// Exporter le routeur
module.exports = router;
