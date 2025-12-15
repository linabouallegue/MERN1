import { Link } from "react-router-dom";

function CourseCard({ course }) {
  if (!course) return null; // sécurité

  return (
    <div
      style={{
        backgroundColor: "#111827",
        borderRadius: "18px",
        padding: "18px",
        border: "1px solid #1f2937",
        boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
        display: "flex",
        flexDirection: "column",
        minHeight: "220px",
      }}
    >
      {/* Titre */}
      <h3 style={{ marginBottom: "6px" }}>
        {course.title}
      </h3>

      {/* Prof / créateur */}
      {course.instructor && (
        <p style={{ fontSize: "14px", color: "#9ca3af", marginBottom: "8px" }}>
          {course.instructor}
        </p>
      )}

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          color: "#e5e7eb",
          marginBottom: "14px",
          flexGrow: 1,
        }}
      >
        {course.description
          ? course.description.substring(0, 120) + "..."
          : "Aucune description n’est disponible pour ce cours."}
      </p>

      {/* Bouton */}
      <Link
        to={`/courses/${course._id}`}
        style={{
          textAlign: "center",
          padding: "8px 16px",
          borderRadius: "999px",
          backgroundColor: "#3b82f6",
          color: "white",
          fontSize: "14px",
          fontWeight: 500,
          marginTop: "auto",
          transition: "0.2s",
        }}
      >
        Voir détails
      </Link>
    </div>
  );
}

export default CourseCard;
