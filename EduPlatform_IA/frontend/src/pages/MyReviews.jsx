import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

function MyReviews() {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) return;

        async function fetchMyReviews() {
            try {
                setError("");
                const res = await api.get("/users/me/reviews");
                setReviews(res.data);
            } catch (err) {
                console.error("ERREUR /users/me/reviews ===>", err);
                const msg =
                    err.response?.data?.message ||
                    `Erreur lors du chargement des reviews (code ${err.response?.status || "???"})`;
                setError(msg);
            } finally {
                setLoading(false);
            }
        }

        fetchMyReviews();
    }, [user]);

    // Render stars based on rating
    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    };

    if (!user) {
        return (
            <div style={{ textAlign: "center", marginTop: 40 }}>
                Vous devez être connecté pour voir vos reviews.
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto",
                padding: "0 16px 40px",
            }}
        >
            <h2>Mes Reviews</h2>
            <p style={{ color: "#9ca3af", marginBottom: 24 }}>
                Toutes vos critiques et évaluations de cours.
            </p>

            {loading && <p>Chargement de vos reviews...</p>}

            {error && !loading && <p style={{ color: "red" }}>{error}</p>}

            {!loading && !error && reviews.length === 0 && (
                <div
                    style={{
                        backgroundColor: "#111827",
                        borderRadius: 18,
                        padding: 24,
                        border: "1px solid #1f2937",
                        textAlign: "center",
                    }}
                >
                    <p>Vous n'avez pas encore laissé de review.</p>
                    <Link
                        to="/courses"
                        style={{
                            display: "inline-block",
                            marginTop: 12,
                            padding: "10px 20px",
                            backgroundColor: "#3b82f6",
                            color: "white",
                            borderRadius: 999,
                            fontWeight: 500,
                        }}
                    >
                        Découvrir les cours
                    </Link>
                </div>
            )}

            {!loading && !error && reviews.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            style={{
                                backgroundColor: "#111827",
                                borderRadius: 18,
                                padding: 20,
                                border: "1px solid #1f2937",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: 12,
                                }}
                            >
                                <div>
                                    <h4 style={{ marginBottom: 4 }}>
                                        {review.course?.title || "Cours supprimé"}
                                    </h4>
                                    <p style={{ color: "#9ca3af", fontSize: 14 }}>
                                        {review.course?.instructor || ""}
                                    </p>
                                </div>
                                <span
                                    style={{
                                        color: "#fbbf24",
                                        fontSize: 18,
                                        letterSpacing: 2,
                                    }}
                                >
                                    {renderStars(review.rating)}
                                </span>
                            </div>

                            {review.comment && (
                                <p style={{ color: "#e5e7eb", fontSize: 15 }}>
                                    {review.comment}
                                </p>
                            )}

                            <Link
                                to={`/courses/${review.course?._id}`}
                                style={{
                                    display: "inline-block",
                                    marginTop: 12,
                                    fontSize: 14,
                                    color: "#3b82f6",
                                }}
                            >
                                Voir le cours →
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyReviews;
