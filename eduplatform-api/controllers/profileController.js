// controllers/profileController.js
import Profile from "../models/profile.js";
import User from "../models/user.js";

/**
 * @desc Créer un profil pour un utilisateur
 * @route POST /api/profiles
 */
export const createProfile = async (req, res) => {
  try {
    const { userId, bio, profileImage, skills, socialLinks } = req.body;

    // Vérifie si l'utilisateur existe
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    // Vérifie si un profil existe déjà pour cet utilisateur
    const existingProfile = await Profile.findOne({ user: userId });
    if (existingProfile)
      return res.status(400).json({ message: "Profil déjà créé pour cet utilisateur" });

    // Crée un nouveau profil
    const profile = await Profile.create({
      user: userId,
      bio,
      profileImage,
      skills,
      socialLinks,
    });

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc Récupérer tous les profils
 * @route GET /api/profiles
 */
export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", "username email");
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc Récupérer un profil par ID utilisateur
 * @route GET /api/profiles/:userId
 */
export const getProfileByUserId = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId }).populate(
      "user",
      "username email"
    );
    if (!profile) return res.status(404).json({ message: "Profil non trouvé" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
