
# 🎓 EduPlatform — Plateforme de Gestion de Cours en Ligne (MERN)

EduPlatform est une application web complète de e-learning développée avec la **stack MERN**  
(**MongoDB, Express.js, React 18, Node.js**).  
Elle permet aux utilisateurs de s’inscrire, se connecter, explorer des cours, s’y inscrire, laisser des avis et gérer leur profil via une interface moderne au thème violet.

---

## 🚀 Fonctionnalités

### 🔐 Authentification & Utilisateurs
- ✅ Inscription et connexion sécurisées
- ✅ Génération de token **JWT**
- ✅ Protection des routes privées
- ✅ Déconnexion
- ✅ Profil utilisateur (bio + site web)

### 📚 Gestion des Cours
- ✅ Catalogue de cours
- ✅ Pagination (10 cours/page)
- ✅ Recherche instantanée par titre
- ✅ Détails complets d'un cours
- ✅ Inscription à un cours
- ✅ Liste des étudiants inscrits

### ⭐ Système d’Avis
- ✅ Ajout d’avis (1 à 5 étoiles + commentaire)
- ✅ Consultation des avis par cours
- ✅ Page **Mes avis**
- ✅ Suppression des avis

### 👤 Gestion du Profil
- ✅ Visualisation des informations
- ✅ Édition du profil
- ✅ Liste des cours suivis

### 🎨 Interface & Expérience Utilisateur

- 🧭 **Navbar fixe** avec **Accueil**, **Cours**, **Connexion** et **Inscription**  
- 🏠 **Page d’accueil “landing page”** avec titre *Bienvenue sur EduPlatform*, texte de présentation et call-to-action **“Commencez dès maintenant 🚀”**  
- 🔘 **Boutons principaux** : Connexion (bleu) & Inscription (vert)  
- 🌑 **Thème sombre bleu/violet** pour une lecture confortable  
- 📱 **Design responsive** (PC, tablette, mobile)  
- ⚠️ **Alertes SweetAlert2**, ⏳ **loader**, et 🚫 **page 404 personnalisée**


---

## 🛠️ Technologies

### Backend
- **Node.js** – Environnement d’exécution JavaScript côté serveur  
- **Express.js** – Framework pour créer des APIs REST  
- **MongoDB + Mongoose** – Base de données NoSQL et ORM pour la gestion des modèles  
- **JWT** – Authentification sécurisée par token  
- **bcryptjs** – Hashage des mots de passe  
- **dotenv** – Gestion des variables d’environnement  
- **express-async-handler** – Simplification de la gestion des erreurs async  
- **cors** – Sécurisation des échanges entre frontend et backend  

### Frontend
- **React 18** – Bibliothèque pour construire l’interface utilisateur  
- **Vite** – Outil de développement et de build rapide  
- **React Router** – Gestion des routes côté client  
- **Axios** – Client HTTP pour la communication avec l’API  
- **SweetAlert2** – Alertes modernes et interactives  
- **CSS moderne** – Mise en page responsive et thème personnalisé  

### Outils
- **Git** – Contrôle de version du projet  
- **npm** – Gestionnaire de dépendances  
- **Nodemon** – Rechargement automatique du serveur en développement  
- **Postman / Thunder Client** – Tests et validation des endpoints API


---

## 📦 Prérequis

- Node.js >= 14
- npm ou yarn
- MongoDB local ou MongoDB Atlas

---



### 2️⃣ Backend
```bash
cd backend
npm install
```

Créer un fichier `.env` :

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/eduplatform
JWT_SECRET=secret_tres_securise
```

Démarrer le serveur :
```bash
npm start
```

---

### 3️⃣ Frontend
```bash
cd frontend
npm install
npm run dev
```

Accéder à l’application :  
👉 **http://localhost:5173**

---

## 🗂️ Arborescence du projet




```bash
EduPlatform/
├─ backend/
│  ├─ config/
│  │  └─ db.js                 # Connexion à MongoDB
│  ├─ controllers/
│  │  ├─ authController.js     # Login / Register
│  │  ├─ courseController.js   # Logique des cours
│  │  ├─ profileController.js  # Profils utilisateurs
│  │  ├─ reviewController.js   # Avis / notes
│  │  └─ userController.js     # Gestion des utilisateurs
│  ├─ middleware/
│  │  ├─ authMiddleware.js     # Middleware JWT
│  │  └─ errorMiddleware.js    # Gestion des erreurs
│  ├─ models/
│  │  ├─ User.js               # Modèle utilisateur
│  │  ├─ Course.js             # Modèle cours
│  │  ├─ Profile.js            # Modèle profil
│  │  └─ Review.js             # Modèle avis
│  ├─ routes/
│  │  ├─ authRoutes.js         # Routes d'authentification
│  │  ├─ courseRoutes.js       # Routes des cours
│  │  └─ userRoutes.js         # Routes utilisateurs / profil / avis
│  ├─ images/                  # (Optionnel) fichiers uploadés
│  ├─ server.js                # Point d’entrée backend
│  └─ package.json
│
└─ frontend/
   └─ src/
      ├─ api/
      │  └─ axios.js           # Configuration Axios (baseURL API)
      ├─ assets/               # Images / icônes / ressources statiques
      ├─ components/
      │  ├─ CourseCard.jsx     # Carte d’affichage d’un cours
      │  ├─ Navbar.jsx         # Barre de navigation principale
      │  └─ ProtectedRoute.jsx # Protection des routes privées
      ├─ context/
      │  └─ AuthContext.jsx    # Contexte d’authentification (user + token)
      ├─ pages/
      │  ├─ CourseDetails.jsx  # Détails d’un cours + avis
      │  ├─ Courses.jsx        # Liste des cours
      │  ├─ EditProfile.jsx    # Édition du profil utilisateur
      │  ├─ Home.jsx           # Page d’accueil
      │  ├─ Login.jsx          # Connexion
      │  ├─ MyReviews.jsx      # Liste des avis de l’utilisateur
      │  ├─ NotFound.jsx       # Page 404
      │  ├─ Profile.jsx        # Profil utilisateur
      │  └─ Register.jsx       # Inscription
      ├─ App.css               # Styles principaux
      ├─ App.jsx               # Composant racine de l’application
      ├─ index.css             # Styles globaux
      ├─ main.jsx              # Point d’entrée React
      ├─ index.html
      ├─ vite.config.js
      └─ package.json

```

---

## 🔌 API Principales

### Auth
POST `/auth/register`  
POST `/auth/login`

### Utilisateurs
GET `/users` ✅  
GET `/users/:id` ✅  
GET `/users/:userId/courses` ✅  
GET `/users/:userId/reviews` ✅  

### Profil
POST `/users/:userId/profile` ✅  
GET `/users/:userId/profile` ✅  
PUT `/users/:userId/profile` ✅  

### Cours
GET `/courses`  
GET `/courses/:id`  
POST `/courses` ✅  
POST `/courses/:id/enroll` ✅  
GET `/courses/:id/students`

### Avis
GET `/courses/:id/reviews`  
POST `/courses/:id/reviews` ✅  

*(✅ = nécessite authentification)*

---

## 🔐 Sécurité

- ✔ Hash des mots de passe (bcryptjs)
- ✔ JWT stocké côté client (localStorage)
- ✔ Middleware de protection
- ✔ CORS restreint
- ✔ Validation serveurs

---

## 📊 Modèles

### User
```js
{
  username,
  email,
  password,
  courses[],
  createdAt
}
```

### Course
```js
{
  title,
  description,
  instructor,
  students[],
  createdAt
}
```

### Profile
```js
{
  bio,
  website,
  user,
  createdAt
}
```

### Review
```js
{
  rating,
  comment,
  course,
  user,
  createdAt
}
```

---

## ✅ Exemple API — Création d’un cours

```bash
curl -X POST http://localhost:3000/api/courses -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{
  "title":"React Avancé",
  "description":"Hooks, optimisation et patterns",
  "instructor":"Jane Doe"
}'
```

---

## 🎬 Démonstration

![demo](src/assets/demo/Video_Project.gif)

## 🐞 Dépannage

- 🔸 MongoDB non démarré → lancer MongoDB
- 🔸 Problème CORS → vérifier `server.js`
- 🔸 JWT invalide → se reconnecter
- 🔸 Erreur d’avis → vérifier inscription au cours

---
## 💡 Cours de démonstration

- Node.js 101
- React Performance
- MongoDB Avancé
- Docker Essentials
- GraphQL Basics

---

## 👩‍💻 Auteur

**Bouallègue Lina**  
Plateforme EduPlatform

---


