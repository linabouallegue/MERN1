import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(username, email, password);
      navigate("/profile");
    } catch (err) {
      setError(
        err.response?.data?.message || "Erreur lors de l'inscription"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 60px)", // hauteur écran - navbar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background:
          "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #111827 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "32px 28px",
          backgroundColor: "#f9fafb",
          borderRadius: "18px",
          boxShadow: "0 20px 45px rgba(15,23,42,0.35)",
        }}
      >
        <h2 style={{ marginBottom: "8px" }}>Créer un compte</h2>
        <p
          style={{
            marginBottom: "20px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          Rejoignez EduPlatform et commencez à suivre des cours dès
          maintenant.
        </p>

        {/* Message d'erreur */}
        {error && (
          <div
            style={{
              padding: "10px",
              marginBottom: "15px",
              backgroundColor: "#fee2e2",
              color: "#b91c1c",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: "14px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "4px",
              }}
            >
              Nom d'utilisateur
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Ex : alex_dev"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "14px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "4px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="vous@example.com"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "18px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "4px",
              }}
            >
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            S'inscrire
          </button>
        </form>

        {/* Lien vers login */}
        <p
          style={{
            marginTop: "16px",
            fontSize: "14px",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          Vous avez déjà un compte ?{" "}
          <Link to="/login" style={{ color: "#2563eb", fontWeight: 500 }}>
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
