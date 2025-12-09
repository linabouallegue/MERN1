const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const User = require("../models/User");
const Review = require("../models/Review");
const Profile = require("../models/Profile");

// Route publique simple (optionnelle)
router.get("/", async (req, res) => {
  res.json({ message: "Route publique OK" });
});

/**
 * GET /api/users/profile
 * Retourne le profil de l'utilisateur connecté (sans le mot de passe)
 */
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json(user);
  } catch (err) {
    console.error("Erreur /users/profile :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

/**
 * GET /api/users/me/courses
 * Retourne la liste des cours de l'utilisateur connecté
 */
router.get("/me/courses", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("courses");

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json(user.courses || []);
  } catch (err) {
    console.error("Erreur /users/me/courses :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

/**
 * GET /api/users/me/reviews
 * Retourne toutes les reviews de l'utilisateur connecté
 */
router.get("/me/reviews", protect, async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.userId })
      .populate("course", "title instructor")
      .sort({ _id: -1 });

    res.json(reviews);
  } catch (err) {
    console.error("Erreur /users/me/reviews :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

/**
 * GET /api/users/me/profile
 * Retourne le profil étendu (bio, website) de l'utilisateur
 */
router.get("/me/profile", protect, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.userId });

    // Create empty profile if it doesn't exist
    if (!profile) {
      profile = await Profile.create({
        user: req.userId,
        bio: "",
        website: ""
      });
    }

    res.json(profile);
  } catch (err) {
    console.error("Erreur /users/me/profile :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

/**
 * PUT /api/users/me/profile
 * Met à jour le profil (bio, website)
 */
router.put("/me/profile", protect, async (req, res) => {
  try {
    const { bio, website } = req.body;

    let profile = await Profile.findOne({ user: req.userId });

    if (!profile) {
      // Create if doesn't exist
      profile = await Profile.create({
        user: req.userId,
        bio: bio || "",
        website: website || ""
      });
    } else {
      // Update existing
      profile.bio = bio !== undefined ? bio : profile.bio;
      profile.website = website !== undefined ? website : profile.website;
      await profile.save();
    }

    res.json(profile);
  } catch (err) {
    console.error("Erreur PUT /users/me/profile :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
