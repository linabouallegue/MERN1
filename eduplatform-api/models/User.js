// models/user.js
import mongoose from "mongoose";

/**
 * Définition du schéma User
 * C’est la structure de chaque utilisateur dans la base de données.
 */
const userSchema = new mongoose.Schema(
  {
    // Nom d'utilisateur unique
    username: {
      type: String,
      required: [true, "Le nom d'utilisateur est obligatoire"],
      unique: true,
      trim: true, // supprime les espaces inutiles
    },

    // Adresse e-mail unique
    email: {
      type: String,
      required: [true, "L'email est obligatoire"],
      unique: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Veuillez entrer un email valide",
      ],
    },

    // Liste des cours auxquels l’utilisateur est inscrit (relation Many-to-Many)
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // référence au modèle "Course"
      },
    ],
  },
  {
    timestamps: true, // ajoute automatiquement createdAt et updatedAt
  }
);

// Création du modèle à partir du schéma
const User = mongoose.model("User", userSchema);

// Exportation pour l’utiliser dans les contrôleurs
export default User;
