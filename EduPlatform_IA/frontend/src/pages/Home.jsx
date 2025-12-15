import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🎓 Bienvenue sur EduPlatform</h1>

      <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "18px" }}>
        EduPlatform est une plateforme d’apprentissage en ligne qui vous permet
        de découvrir, suivre et commenter différents cours.
      </p>

      {isAuthenticated ? (
        <>
          <h3>
            Bonjour <span style={{ color: "#3498db" }}>{user.username}</span> 👋
          </h3>

          <p style={{ marginTop: 10 }}>
            Accédez directement à vos cours.
          </p>

          <Link
            to="/courses"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 25px",
              backgroundColor: "#27ae60",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Voir les cours
          </Link>
        </>
      ) : (
        <>
          <h3>Commencez dès maintenant 🚀</h3>

          <div style={{ marginTop: "20px" }}>
            <Link
              to="/login"
              style={{
                marginRight: "15px",
                padding: "12px 25px",
                backgroundColor: "#3498db",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Connexion
            </Link>

            <Link
              to="/register"
              style={{
                padding: "12px 25px",
                backgroundColor: "#27ae60",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Inscription
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
