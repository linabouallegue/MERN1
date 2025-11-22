// models/profile.js
import mongoose from "mongoose";

/**
 * Schéma de profil utilisateur
 * Un utilisateur possède un seul profil
 */
const profileSchema = new mongoose.Schema(
  {
    // Lien vers l'utilisateur associé (relation 1 à 1)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // référence au modèle User
      required: true,
      unique: true, // 1 profil par utilisateur
    },

    // Biographie
    bio: {
      type: String,
      trim: true,
      default: "Ce profil n'a pas encore de biographie.",
    },

    // URL ou nom du fichier de la photo de profil
    profileImage: {
      type: String,
      default: "default.png",
    },

    // Compétences principales de l’utilisateur
    skills: {
      type: [String], // tableau de chaînes
      default: [],
    },

    // Réseaux sociaux
    socialLinks: {
      website: { type: String, default: "" },
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
    },
  },
  {
    timestamps: true, // crée createdAt / updatedAt
  }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
