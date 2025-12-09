import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

function Profile() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [error, setError] = useState("");

  // Profile data (bio, website)
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function fetchMyCourses() {
      try {
        setError("");
        const res = await api.get("/users/me/courses");
        setCourses(res.data);
      } catch (err) {
        console.error("ERREUR /users/me/courses ===>", err);
        const msg =
          err.response?.data?.message ||
          `Erreur lors du chargement de vos cours (code ${err.response?.status || "???"})`;
        setError(msg);
      } finally {
        setLoadingCourses(false);
      }
    }

    async function fetchProfile() {
      try {
        const res = await api.get("/users/me/profile");
        setProfile(res.data);
      } catch (err) {
        console.error("ERREUR /users/me/profile ===>", err);
      } finally {
        setLoadingProfile(false);
      }
    }

    fetchMyCourses();
    fetchProfile();
  }, [user]);

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        Vous devez être connecté pour voir votre profil.
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
      <h2>Profil</h2>

      {/* User Info Card */}
      <div
        style={{
          marginTop: 16,
          marginBottom: 24,
          backgroundColor: "#111827",
          borderRadius: 18,
          padding: 24,
          border: "1px solid #1f2937",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <p>
            <strong>Nom d'utilisateur :</strong> {user.username}
          </p>
          <p>
            <strong>Email :</strong> {user.email}
          </p>
        </div>

        {/* Bio and Website */}
        {!loadingProfile && profile && (
          <div
            style={{
              borderTop: "1px solid #1f2937",
              paddingTop: 16,
              marginTop: 16,
            }}
          >
            {profile.bio && (
              <div style={{ marginBottom: 12 }}>
                <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 4 }}>
                  Bio
                </p>
                <p style={{ color: "#e5e7eb" }}>{profile.bio}</p>
              </div>
            )}

            {profile.website && (
              <div style={{ marginBottom: 12 }}>
                <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 4 }}>
                  Site web
                </p>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#3b82f6" }}
                >
                  {profile.website}
                </a>
              </div>
            )}

            {!profile.bio && !profile.website && (
              <p style={{ color: "#9ca3af", fontSize: 14 }}>
                Aucune information de profil. Ajoutez une bio et un site web !
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <Link
            to="/edit-profile"
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            ✏️ Modifier le profil
          </Link>

          <Link
            to="/my-reviews"
            style={{
              padding: "10px 20px",
              backgroundColor: "#8b5cf6",
              color: "white",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            ⭐ Mes Reviews
          </Link>
        </div>
      </div>

      <h3>Mes cours</h3>

      {loadingCourses && <p>Chargement de vos cours...</p>}

      {error && !loadingCourses && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      {!loadingCourses && !error && courses.length === 0 && (
        <div
          style={{
            backgroundColor: "#111827",
            borderRadius: 18,
            padding: 24,
            border: "1px solid #1f2937",
            textAlign: "center",
          }}
        >
          <p>Vous n'êtes inscrit à aucun cours.</p>
          <Link
            to="/courses"
            style={{
              display: "inline-block",
              marginTop: 12,
              padding: "10px 20px",
              backgroundColor: "#22c55e",
              color: "white",
              borderRadius: 999,
              fontWeight: 500,
            }}
          >
            Découvrir les cours
          </Link>
        </div>
      )}

      {!loadingCourses && !error && courses.length > 0 && (
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {courses.map((course) => (
            <Link
              key={course._id}
              to={`/courses/${course._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  backgroundColor: "#111827",
                  borderRadius: 12,
                  padding: 16,
                  border: "1px solid #1f2937",
                  transition: "border-color 0.2s",
                }}
              >
                <h4>{course.title}</h4>
                <p style={{ color: "#9ca3af", fontSize: 14 }}>
                  {course.instructor}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Profile;

