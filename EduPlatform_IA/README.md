<div align="center">

# 🎓 EduPlatform - Plateforme Éducative avec IA

### Plateforme d'apprentissage en ligne propulsée par l'Intelligence Artificielle

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-orange.svg)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Démo](#-démo) • [Fonctionnalités](#-fonctionnalités-ia) • [Installation](#-installation-rapide) • [Documentation](#-documentation-api) • [Contribution](#-contribution)

</div>

---

## 📖 Table des Matières

- [Vue d'ensemble](#-vue-densemble)
- [Fonctionnalités IA](#-fonctionnalités-ia)
- [Technologies](#-technologies-utilisées)
- [Prérequis](#-prérequis)
- [Installation Rapide](#-installation-rapide)
- [Configuration](#%EF%B8%8F-configuration)
- [Utilisation](#-utilisation)
- [Documentation API](#-documentation-api)
- [Structure du Projet](#-structure-du-projet)
- [Tests](#-tests)
- [Déploiement](#-déploiement)
- [Dépannage](#-dépannage)
- [Roadmap](#-roadmap)
- [Contribution](#-contribution)
- [Auteurs](#-auteurs)
- [Licence](#-licence)
- [Remerciements](#-remerciements)

---

## 🌟 Vue d'ensemble

**EduPlatform** est une plateforme éducative moderne qui intègre l'intelligence artificielle pour améliorer l'expérience d'apprentissage. Grâce à Google Gemini, la plateforme offre des fonctionnalités intelligentes telles que l'analyse automatique des feedbacks, la génération de contenus éducatifs et des recommandations personnalisées.

### 🎯 Objectif du Projet

Ce projet a été développé dans le cadre du **Cours MERN - Semaine 10** à l'**École Polytechnique de Sousse**. Il démontre l'intégration d'une API IA tierce (Google Gemini) dans une stack MERN complète.

### ✨ Points Forts

- 🤖 **Intelligence Artificielle intégrée** avec Google Gemini
- 📊 **Analyses automatiques** des reviews et feedbacks
- ✍️ **Génération de contenu** assistée par IA
- 🎯 **Recommandations personnalisées** de cours
- 🔒 **Authentification sécurisée** avec JWT
- 📱 **Interface responsive** et moderne

---

## 🚀 Fonctionnalités IA

### 1. 🔍 Analyse Intelligente des Reviews

Génère automatiquement des rapports détaillés sur les avis des étudiants :

- ✅ Sentiment général (Positif/Neutre/Négatif)
- 📈 Calcul et analyse de la note moyenne
- 💪 Identification des 3 principaux points forts
- 🔧 Suggestion de 3 axes d'amélioration prioritaires
- 💡 Recommandations concrètes pour l'instructeur
- 📝 Résumé synthétique en une phrase

**Cas d'usage :** Un instructeur peut instantanément comprendre ce que pensent ses étudiants sans lire manuellement toutes les reviews.

### 2. ✍️ Génération de Descriptions de Cours

Crée automatiquement des descriptions de cours attractives et professionnelles :

- 🎨 Descriptions engageantes et motivantes (2-3 paragraphes)
- 🎯 Mise en avant des bénéfices pour l'étudiant
- 📚 Liste claire des apprentissages attendus
- 🚀 Call-to-action pour encourager l'inscription
![img](images/generate-description.png)
**Cas d'usage :** Gagner du temps lors de la création de nouveaux cours avec des descriptions optimisées pour le marketing.

### 3. 🎯 Suggestions de Cours Similaires

Recommande intelligemment des cours connexes :

- 🔗 Analyse de similarité basée sur le contenu
- 📊 Top 3 des cours les plus pertinents
- 💬 Explication du pourquoi de chaque recommandation
- 🎓 Aide à la découverte de nouveaux apprentissages
![img](images/couses.png)


![img](images/similar-courses.png)
**Cas d'usage :** Augmenter l'engagement des étudiants en leur proposant des cours complémentaires.

### 4. 👤 Génération de Bio Professionnelle

Crée des biographies personnalisées pour les profils :

- ✨ Bio concise et engageante (3-4 phrases)
- 🎯 Basée sur les intérêts, expérience et objectifs
- 💼 Ton professionnel à la première personne
- 🤝 Optimisée pour créer des connexions
  
![img](images/generate-bio.png)

**Cas d'usage :** Aider les utilisateurs à créer un profil attractif rapidement.

### 5. 📊 Insights de Plateforme (Admin)

Fournit une vue d'ensemble stratégique de la plateforme :

- 🏥 Évaluation de la santé générale de la plateforme
- 📈 Identification des tendances principales
- 🌟 Détection des cours populaires
- 💡 3 recommandations stratégiques d'amélioration
![img](images/platform-insights.png)
**Cas d'usage :** Dashboard administrateur pour prendre des décisions data-driven.

---
## 🎬 Démonstration

![demo](Demo/Video-Project-6.gif)

## 🛠️ Technologies Utilisées

<div align="center">

### Backend

| Technologie | Version | Utilisation |
|------------|---------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | v14+ | Runtime JavaScript |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | v4.18+ | Framework web |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | v5+ | Base de données NoSQL |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) | v7+ | ODM MongoDB |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white) | - | Authentification |
| ![Google Gemini](https://img.shields.io/badge/Gemini-4285F4?style=flat&logo=google&logoColor=white) | 2.5-flash | Intelligence Artificielle |

### Frontend

| Technologie | Version | Utilisation |
|------------|---------|-------------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | v18+ | Bibliothèque UI |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | v6+ | Navigation |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) | v1+ | Client HTTP |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | v4+ | Build tool |

</div>

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- ✅ **Node.js** (v14 ou supérieur) - [Télécharger](https://nodejs.org/)
- ✅ **MongoDB** (local ou MongoDB Atlas) - [Guide d'installation](https://www.mongodb.com/docs/manual/installation/)
- ✅ **npm** ou **yarn** (gestionnaire de paquets)
- ✅ **Un compte Google** pour obtenir une clé API Gemini
- ✅ **Git** pour cloner le projet

### Vérifier les installations

```bash
node --version   # Doit afficher v14.0.0 ou supérieur
npm --version    # Doit afficher 6.0.0 ou supérieur
mongod --version # Vérifier MongoDB
```

---

## ⚡ Installation Rapide

### Option 1 : Installation Automatique (Recommandé)

```bash
# 1. Cloner le projet
git clone https://github.com/linabouallegue/eduplatform.git
cd eduplatform

# 2. Installer les dépendances (backend + frontend)
npm run install-all

# 3. Configurer les variables d'environnement
cp backend/.env.example backend/.env
# Éditer backend/.env avec vos valeurs

# 4. Démarrer l'application
npm run dev
```

### Option 2 : Installation Manuelle

#### Backend

```bash
# 1. Aller dans le dossier backend
cd backend

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env
touch .env

# 4. Démarrer le serveur
npm run dev
```

#### Frontend

```bash
# 1. Ouvrir un nouveau terminal et aller dans le dossier frontend
cd frontend

# 2. Installer les dépendances
npm install

# 3. Démarrer l'application
npm run dev
```

---

## ⚙️ Configuration

### 1. Obtenir votre Clé API Gemini (GRATUIT) 🔑

1. **Visitez** : [https://ai.google.dev/](https://ai.google.dev/)
2. **Cliquez** sur "Get API Key"
3. **Connectez-vous** avec votre compte Google
4. **Créez** une nouvelle clé API
5. **Copiez** la clé (format : `AIzaSy...`)

> ⚠️ **Important** : Ne partagez JAMAIS votre clé API publiquement !

### 2. Configurer le Backend (.env)

Créez un fichier `backend/.env` avec le contenu suivant :

```env
# Configuration du serveur
NODE_ENV=development
PORT=5000

# Base de données MongoDB
MONGO_URI=mongodb://localhost:27017/eduplatform
# Ou MongoDB Atlas :
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eduplatform

# Authentification JWT
JWT_SECRET=votre_secret_jwt_super_securise_ici_123456
JWT_EXPIRE=30d

# Google Gemini API
GEMINI_API_KEY=votre_clé_api_gemini_ici

# CORS (si nécessaire)
CLIENT_URL=http://localhost:5173
```

### 3. Configurer le Frontend

Vérifiez que `frontend/src/api/axios.js` pointe vers votre backend :

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ajouter le token JWT automatiquement
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

---

## 💻 Utilisation

### Démarrer l'Application

#### Mode Développement

```bash
# Terminal 1 - Backend
cd backend
npm run dev
# ✅ Serveur backend sur http://localhost:5000

# Terminal 2 - Frontend
cd frontend
npm run dev
# ✅ Application frontend sur http://localhost:5173
```

#### Mode Production

```bash
# Build du frontend
cd frontend
npm run build

# Démarrer le backend en mode production
cd backend
npm start
```

### Premiers Pas

1. **Ouvrez** votre navigateur sur `http://localhost:5173`
2. **Créez un compte** ou connectez-vous
3. **Explorez** les cours disponibles
4. **Testez** les fonctionnalités IA :
   - Ajoutez des reviews à un cours
   - Cliquez sur "📊 Voir l'Analyse IA"
   - Allez sur `/generate-description` pour tester la génération
   - Consultez les cours similaires sur une page de cours

---

## 📚 Documentation API

### Base URL

```
http://localhost:3000/api
```

### Authentification

Toutes les routes protégées nécessitent un token JWT dans le header :

```
Authorization: Bearer <votre_token_jwt>
```

### Endpoints IA

#### 1. Analyser les Reviews d'un Cours

```http
POST /api/ai/analyze-reviews/:courseId
```

**Headers :**
- `Authorization: Bearer <token>`

**Réponse (200 OK) :**

```json
{
  "success": true,
  "data": {
    "courseTitle": "Introduction à React",
    "reviewCount": 15,
    "analysis": "## Sentiment Général\n[...]\n## Points Forts\n[...]"
  }
}
```

#### 2. Générer une Description de Cours

```http
POST /api/ai/generate-description
```

**Headers :**
- `Authorization: Bearer <token>`
- `Content-Type: application/json`

**Body :**

```json
{
  "title": "Introduction à React",
  "instructor": "Jean Dupont",
  "keywords": ["React", "JavaScript", "Frontend", "Hooks"]
}
```

**Réponse (200 OK) :**

```json
{
  "success": true,
  "data": {
    "description": "Plongez au cœur du développement web moderne..."
  }
}
```

#### 3. Suggestions de Cours Similaires

```http
POST /api/ai/similar-courses/:courseId
```

**Accès :** Public (pas d'authentification requise)

**Réponse (200 OK) :**

```json
{
  "success": true,
  "data": {
    "referenceCourse": "Introduction à React",
    "suggestions": "1. [Numéro du cours] - [Raison...]\n2. [...]",
    "availableCourses": [
      {
        "id": "123abc",
        "title": "Advanced React Patterns"
      }
    ]
  }
}
```

#### 4. Générer une Bio Professionnelle

```http
POST /api/ai/generate-bio
```

**Headers :**
- `Authorization: Bearer <token>`
- `Content-Type: application/json`

**Body :**

```json
{
  "interests": "Développement web, IA, Open Source",
  "experience": "5 ans en tant que développeur Full Stack",
  "goals": "Devenir expert en architectures cloud"
}
```

**Réponse (200 OK) :**

```json
{
  "success": true,
  "data": {
    "bio": "Passionné par le développement web depuis 5 ans..."
  }
}
```

#### 5. Insights de la Plateforme (Admin)

```http
GET /api/ai/platform-insights
```

**Headers :**
- `Authorization: Bearer <token_admin>`

**Réponse (200 OK) :**

```json
{
  "success": true,
  "data": {
    "stats": {
      "totalCourses": 25,
      "totalReviews": 150,
      "averageRating": "4.35"
    },
    "insights": "## Santé Générale de la Plateforme\n[...]"
  }
}
```

### Codes de Statut HTTP

| Code | Signification | Description |
|------|---------------|-------------|
| 200 | OK | Requête réussie |
| 201 | Created | Ressource créée avec succès |
| 400 | Bad Request | Données invalides ou manquantes |
| 401 | Unauthorized | Token JWT manquant ou invalide |
| 404 | Not Found | Ressource non trouvée |
| 500 | Internal Server Error | Erreur serveur |

---

## 📁 Structure du Projet

```
eduplatform/
│
├── backend/                    # Backend Node.js/Express
│   ├── config/                 # Configuration
│   │   ├── db.js              # Connexion MongoDB
│   │   └── gemini.js          # Configuration Gemini API
│   │
│   ├── controllers/            # Logique métier
│   │   ├── authController.js  # Authentification
│   │   ├── courseController.js
│   │   ├── reviewController.js
│   │   └── aiController.js    # ⭐ Contrôleur IA
│   │
│   ├── models/                 # Modèles Mongoose
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Review.js
│   │   └── Profile.js
│   │
│   ├── routes/                 # Routes API
│   │   ├── authRoutes.js
│   │   ├── courseRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── aiRoutes.js        # ⭐ Routes IA
│   │
│   ├── middleware/             # Middlewares
│   │   ├── authMiddleware.js  # Protection JWT
│   │   └── errorHandler.js
│   │
│   ├── .env                    # Variables d'environnement
│   ├── .env.example           # Exemple de configuration
│   ├── server.js              # Point d'entrée
│   └── package.json
│
├── frontend/                   # Frontend React
│   ├── src/
│   │   ├── api/               # Configuration API
│   │   │   └── axios.js       # Instance Axios
│   │   │
│   │   ├── components/         # Composants réutilisables
│   │   │   ├── Navbar.jsx
│   │   │   ├── CourseCard.jsx
│   │   │   └── SimilarCourses.jsx  # ⭐ Composant IA
│   │   │
│   │   ├── pages/              # Pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── CourseDetails.jsx
│   │   │   ├── CourseAnalysis.jsx      # ⭐ Page IA
│   │   │   └── GenerateDescription.jsx # ⭐ Page IA
│   │   │
│   │   ├── context/            # Context API
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── utils/              # Utilitaires
│   │   ├── App.jsx             # Composant principal
│   │   └── main.jsx            # Point d'entrée
│   │
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── docs/                       # Documentation
│   ├── API.md                 # Documentation API détaillée
│   ├── ARCHITECTURE.md        # Architecture du projet
│   └── CONTRIBUTING.md        # Guide de contribution
│
├── .gitignore
├── README.md                   # Ce fichier
└── LICENSE
```

---

## 🧪 Tests

### Tester avec Postman ou Thunder Client

#### Collection Postman

Importez la collection fournie : `postman_collection.json`

Ou testez manuellement :

**1. S'inscrire**

```http
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "Password123!"
}
```

**2. Se connecter**

```http
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "Password123!"
}
```

**3. Tester la génération de description**

```http
POST http://localhost:5000/api/ai/generate-description
Authorization: Bearer VOTRE_TOKEN_ICI
Content-Type: application/json

{
  "title": "Introduction à React",
  "instructor": "Jean Dupont",
  "keywords": ["React", "JavaScript", "Frontend"]
}
```

### Tests Unitaires (À venir)

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

---

## 🚢 Déploiement

### Déployer sur Heroku (Backend)

```bash
# 1. Installer Heroku CLI
npm install -g heroku

# 2. Se connecter
heroku login

# 3. Créer l'application
heroku create eduplatform-api

# 4. Ajouter MongoDB Atlas
# (Configurer MONGO_URI dans Heroku Config Vars)

# 5. Ajouter les variables d'environnement
heroku config:set GEMINI_API_KEY=votre_clé
heroku config:set JWT_SECRET=votre_secret

# 6. Déployer
git push heroku main
```

### Déployer sur Vercel (Frontend)

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
cd frontend
vercel

# 4. Configurer les variables d'environnement
# Dans le dashboard Vercel, ajouter VITE_API_URL
```

### Déployer sur Render (Full Stack)

[Guide complet de déploiement sur Render](https://render.com/docs)

---

## 🔧 Dépannage

### Problèmes Fréquents

#### ❌ "Cannot find module '@google/generative-ai'"

**Solution :**
```bash
cd backend
npm install @google/generative-ai
```

#### ❌ "GEMINI_API_KEY is not defined"

**Solution :**
1. Vérifiez que votre fichier `.env` contient `GEMINI_API_KEY=...`
2. Redémarrez le serveur backend
3. Vérifiez qu'il n'y a pas d'espaces autour du `=`

#### ❌ Erreur 404 sur les routes IA

**Solution :**
Vérifiez dans `backend/server.js` :
```javascript
const aiRoutes = require('./routes/aiRoutes');
app.use('/api/ai', aiRoutes);
```

#### ❌ "MongoServerError: Authentication failed"

**Solution :**
Vérifiez votre `MONGO_URI` dans le `.env`. Pour MongoDB Atlas, assurez-vous que :
1. Votre IP est dans la whitelist
2. Le mot de passe ne contient pas de caractères spéciaux

#### ❌ CORS Error

**Solution :**
Dans `backend/server.js`, ajoutez :
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

#### ❌ "Request failed with status code 429" (Rate Limit)

**Solution :**
Vous avez dépassé le quota gratuit de Gemini. Attendez quelques minutes ou créez une nouvelle clé API.

### Logs de Débogage

**Backend :**
```bash
cd backend
DEBUG=* npm run dev
```

**Frontend :**
```bash
# Ouvrez la console du navigateur (F12)
# Les erreurs s'affichent dans l'onglet Console
```

---


## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

### Comment Contribuer

1. **Fork** le projet
2. **Créez** votre branche de fonctionnalité
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Committez** vos changements
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** vers la branche
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Ouvrez** une Pull Request

### Directives de Contribution

- Suivez les conventions de code existantes
- Écrivez des messages de commit clairs
- Ajoutez des tests pour les nouvelles fonctionnalités
- Mettez à jour la documentation si nécessaire
- Vérifiez que votre code passe les tests avant de soumettre

### Signaler des Bugs

Ouvrez une issue avec :
- Une description claire du bug
- Les étapes pour reproduire
- Le comportement attendu vs. observé
- Captures d'écran si applicable
- Votre environnement (OS, Node version, etc.)

---

## 👥 Auteurs

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/linabouallegue">
        <img src="https://github.com/linabouallegue.png" width="100px;" alt=""/>
        <br />
        <sub><b>Bouallegue Lina</b></sub>
      </a>
      <br />
      <sub>Etudiante</sub>
      <br />
      <a href="https://github.com/linabouallegue" title="GitHub">💻</a>
      <a href="https://linkedin.com/in/lina-bouallegue" title="LinkedIn">💼</a>
    </td>
  </tr>
</table>

### Professeur

- **Abdelweheb GUEDDES** - École Polytechnique Sousse





### Ressources Utiles

- 📚 [Documentation Google Gemini](https://ai.google.dev/docs)
- 📖 [Guide des Prompts IA](https://developers.google.com/machine-learning/resources/prompt-eng)
- 🎓 [MDN Web Docs](https://developer.mozilla.org/)
- 🚀 [React Documentation](https://react.dev/)
- 🍃 [MongoDB Documentation](https://www.mongodb.com/docs/)
- 📘 [Express.js Guide](https://expressjs.com/en/guide/routing.html)

---

## 📊 Statistiques du Projet

![GitHub stars](https://img.shields.io/github/stars/votre-username/eduplatform?style=social)
![GitHub forks](https://img.shields.io/github/forks/votre-username/eduplatform?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/votre-username/eduplatform?style=social)

![GitHub issues](https://img.shields.io/github/issues/votre-username/eduplatform)
![GitHub pull requests](https://img.shields.io/github/issues-pr/votre-username/eduplatform)
![GitHub last commit](https://img.shields.io/github