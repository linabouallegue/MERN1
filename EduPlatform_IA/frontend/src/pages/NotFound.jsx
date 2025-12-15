import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div
            style={{
                minHeight: "calc(100vh - 60px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                textAlign: "center",
            }}
        >
            <div
                style={{
                    fontSize: 120,
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 16,
                }}
            >
                404
            </div>

            <h1 style={{ fontSize: 28, marginBottom: 12 }}>
                Page non trouvée
            </h1>

            <p
                style={{
                    color: "#9ca3af",
                    fontSize: 16,
                    maxWidth: 400,
                    marginBottom: 32,
                }}
            >
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>

            <div style={{ display: "flex", gap: 12 }}>
                <Link
                    to="/"
                    style={{
                        padding: "12px 28px",
                        backgroundColor: "#3b82f6",
                        color: "white",
                        borderRadius: 999,
                        fontWeight: 600,
                        fontSize: 15,
                        textDecoration: "none",
                    }}
                >
                    Retour à l'accueil
                </Link>

                <Link
                    to="/courses"
                    style={{
                        padding: "12px 28px",
                        backgroundColor: "#374151",
                        color: "white",
                        borderRadius: 999,
                        fontWeight: 500,
                        fontSize: 15,
                        textDecoration: "none",
                    }}
                >
                    Voir les cours
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
