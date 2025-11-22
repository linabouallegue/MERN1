// controllers/userController.js
import User from "../models/user.js";

/**
 * @desc Créer un utilisateur
 * @route POST /api/users
 */
export const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Vérifie que les champs sont fournis
    if (!username || !email) {
      return res.status(400).json({ message: "Nom d'utilisateur et email requis" });
    }

    // Crée l'utilisateur
    const user = await User.create({ username, email });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc Récupérer tous les utilisateurs
 * @route GET /api/users
 */
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v"); // supprime le champ __v
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc Récupérer un utilisateur par ID
 * @route GET /api/users/:id
 */
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
