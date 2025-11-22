// controllers/userController.js

// Fonction GET : renvoyer la liste des utilisateurs (fictifs pour le moment)
const getAllUsers = (req, res) => {
  const users = [
    { id: 1, nom: 'Alice', email: 'alice@example.com' },
    { id: 2, nom: 'Bob', email: 'bob@example.com' },
    { id: 3, nom: 'Charlie', email: 'charlie@example.com' }
  ];
  
  res.status(200).json({
    message: 'Liste des utilisateurs récupérée avec succès',
    users
  });
};

// Fonction POST : créer un nouvel utilisateur
const createUser = (req, res) => {
  const userData = req.body;
  console.log('Données reçues pour création :', userData);

  res.status(201).json({
    message: 'Utilisateur créé avec succès',
    user: { id: Date.now(), ...userData }
  });
};

// Exporter les fonctions
module.exports = {
  getAllUsers,
  createUser
};
