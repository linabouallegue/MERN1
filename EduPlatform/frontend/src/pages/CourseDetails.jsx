import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const [course, setCourse] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Reviews state
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const [reviewSuccess, setReviewSuccess] = useState("");

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        setError("");
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error("ERREUR /courses/:id ===>", err);
        const msg =
          err.response?.data?.message ||
          `Erreur lors du chargement du cours (code ${err.response?.status || "???"})`;
        setError(msg);
      } finally {
        setLoading(false);
      }
    }

    async function fetchReviews() {
      try {
        setLoadingReviews(true);
        const res = await api.get(`/courses/${id}/reviews`);
        setReviews(res.data);
      } catch (err) {
        console.error("ERREUR /courses/:id/reviews ===>", err);
      } finally {
        setLoadingReviews(false);
      }
    }

    fetchCourse();
    fetchReviews();
  }, [id]);

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      setEnrolling(true);
      await api.post(`/courses/${id}/enroll`);
      alert("Inscription au cours réussie !");
    } catch (err) {
      console.error("ERREUR /courses/:id/enroll ===>", err);
      alert(
        err.response?.data?.message ||
        "Erreur lors de l'inscription au cours"
      );
    } finally {
      setEnrolling(false);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setReviewError("");
    setReviewSuccess("");

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      setSubmittingReview(true);
      const res = await api.post(`/courses/${id}/reviews`, {
        rating,
        comment,
      });
      setReviews([{ ...res.data, user: { username: user.username } }, ...reviews]);
      setComment("");
      setRating(5);
      setReviewSuccess("Review ajoutée avec succès !");
    } catch (err) {
      console.error("ERREUR POST /courses/:id/reviews ===>", err);
      setReviewError(
        err.response?.data?.message || "Erreur lors de l'ajout de la review"
      );
    } finally {
      setSubmittingReview(false);
    }
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        Chargement du cours...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: 40, color: "red" }}>
        {error}
      </div>
    );
  }

  if (!course) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        Cours introuvable.
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
      {/* Course Info */}
      <div
        style={{
          backgroundColor: "#111827",
          borderRadius: 20,
          padding: 24,
          border: "1px solid #1f2937",
          boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
          marginBottom: 32,
        }}
      >
        <h2 style={{ marginBottom: 4 }}>{course.title}</h2>
        <p style={{ color: "#9ca3af", marginBottom: 16 }}>
          {course.instructor}
        </p>

        {course.description && (
          <p style={{ color: "#e5e7eb", marginBottom: 24 }}>
            {course.description}
          </p>
        )}

        <button
          onClick={handleEnroll}
          disabled={enrolling}
          style={{
            padding: "10px 22px",
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            backgroundColor: "#22c55e",
            color: "white",
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          {enrolling ? "Inscription..." : "S'inscrire au cours"}
        </button>
      </div>

      {/* Review Form */}
      {isAuthenticated && (
        <div
          style={{
            backgroundColor: "#111827",
            borderRadius: 20,
            padding: 24,
            border: "1px solid #1f2937",
            boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
            marginBottom: 32,
          }}
        >
          <h3 style={{ marginBottom: 16 }}>Ajouter une review</h3>

          {reviewError && (
            <div
              style={{
                padding: 12,
                marginBottom: 16,
                backgroundColor: "#fee2e2",
                color: "#b91c1c",
                borderRadius: 8,
                fontSize: 14,
              }}
            >
              {reviewError}
            </div>
          )}

          {reviewSuccess && (
            <div
              style={{
                padding: 12,
                marginBottom: 16,
                backgroundColor: "#d1fae5",
                color: "#065f46",
                borderRadius: 8,
                fontSize: 14,
              }}
            >
              {reviewSuccess}
            </div>
          )}

          <form onSubmit={handleSubmitReview}>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 500,
                  marginBottom: 8,
                  color: "#e5e7eb",
                }}
              >
                Note
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 28,
                      color: star <= rating ? "#fbbf24" : "#374151",
                      padding: 0,
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 500,
                  marginBottom: 8,
                  color: "#e5e7eb",
                }}
              >
                Commentaire
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Partagez votre expérience avec ce cours..."
                rows={3}
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 10,
                  border: "1px solid #374151",
                  backgroundColor: "#1f2937",
                  color: "#f9fafb",
                  fontSize: 14,
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={submittingReview}
              style={{
                padding: "10px 24px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: 999,
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {submittingReview ? "Envoi..." : "Publier la review"}
            </button>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div>
        <h3 style={{ marginBottom: 16 }}>
          Reviews ({reviews.length})
        </h3>

        {loadingReviews && <p>Chargement des reviews...</p>}

        {!loadingReviews && reviews.length === 0 && (
          <p style={{ color: "#9ca3af" }}>
            Aucune review pour ce cours. Soyez le premier à donner votre avis !
          </p>
        )}

        {!loadingReviews && reviews.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {reviews.map((review) => (
              <div
                key={review._id}
                style={{
                  backgroundColor: "#111827",
                  borderRadius: 16,
                  padding: 18,
                  border: "1px solid #1f2937",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>
                    {review.user?.username || "Utilisateur"}
                  </span>
                  <span
                    style={{
                      color: "#fbbf24",
                      fontSize: 16,
                      letterSpacing: 2,
                    }}
                  >
                    {renderStars(review.rating)}
                  </span>
                </div>
                {review.comment && (
                  <p style={{ color: "#e5e7eb", fontSize: 14 }}>
                    {review.comment}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;

