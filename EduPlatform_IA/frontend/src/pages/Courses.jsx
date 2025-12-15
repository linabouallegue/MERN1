import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Search state
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        setError("");

        const res = await api.get("/courses", {
          params: {
            page,
            limit: 10,
            search,
          },
        });

        setCourses(res.data.courses);
        setTotalPages(res.data.pagination.totalPages);
        setTotal(res.data.pagination.total);
      } catch (err) {
        console.error("ERREUR /courses ===>", err);
        const msg =
          err.response?.data?.message ||
          `Erreur lors du chargement des cours (code ${err.response?.status || "???"}).`;
        setError(msg);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, [page, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1); // Reset to first page on new search
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearch("");
    setPage(1);
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "0 16px 40px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 8 }}>Catalogue des cours</h2>
      <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 24 }}>
        Découvrez les cours disponibles sur EduPlatform.
      </p>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          gap: 12,
          maxWidth: 600,
          margin: "0 auto 32px",
        }}
      >
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Rechercher un cours par titre..."
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: 999,
            border: "1px solid #374151",
            backgroundColor: "#1f2937",
            color: "#f9fafb",
            fontSize: 15,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: 999,
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          Rechercher
        </button>
        {search && (
          <button
            type="button"
            onClick={handleClearSearch}
            style={{
              padding: "12px 20px",
              backgroundColor: "#374151",
              color: "white",
              border: "none",
              borderRadius: 999,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            ✕
          </button>
        )}
      </form>

      {/* Search result info */}
      {search && !loading && (
        <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 16 }}>
          {total} résultat(s) pour "{search}"
        </p>
      )}

      {loading && (
        <p style={{ textAlign: "center" }}>Chargement des cours...</p>
      )}

      {error && !loading && (
        <p style={{ textAlign: "center", color: "red", marginBottom: 16 }}>
          {error}
        </p>
      )}

      {!loading && !error && courses.length === 0 && (
        <p style={{ textAlign: "center" }}>
          {search
            ? `Aucun cours trouvé pour "${search}".`
            : "Aucun cours disponible pour le moment."}
        </p>
      )}

      {!loading && !error && courses.length > 0 && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {courses.map((course) => (
              <div
                key={course._id}
                style={{
                  backgroundColor: "#111827",
                  borderRadius: 18,
                  padding: 18,
                  border: "1px solid #1f2937",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
                }}
              >
                <h3 style={{ marginBottom: 4 }}>{course.title}</h3>
                <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 8 }}>
                  {course.instructor}
                </p>
                {course.description && (
                  <p
                    style={{
                      fontSize: 14,
                      color: "#e5e7eb",
                      marginBottom: 12,
                    }}
                  >
                    {course.description.substring(0, 110)}...
                  </p>
                )}

                <Link
                  to={`/courses/${course._id}`}
                  style={{
                    display: "inline-block",
                    padding: "8px 18px",
                    borderRadius: 999,
                    backgroundColor: "#3b82f6",
                    color: "white",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Voir détails
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 12,
                marginTop: 32,
              }}
            >
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  padding: "10px 20px",
                  backgroundColor: page === 1 ? "#374151" : "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: 999,
                  cursor: page === 1 ? "not-allowed" : "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: page === 1 ? 0.5 : 1,
                }}
              >
                ← Précédent
              </button>

              <div style={{ display: "flex", gap: 8 }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: p === page ? "#3b82f6" : "#374151",
                      color: "white",
                      fontSize: 14,
                      fontWeight: p === page ? 600 : 400,
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  padding: "10px 20px",
                  backgroundColor: page === totalPages ? "#374151" : "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: 999,
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: page === totalPages ? 0.5 : 1,
                }}
              >
                Suivant →
              </button>
            </div>
          )}

          {/* Page info */}
          <p
            style={{
              textAlign: "center",
              color: "#9ca3af",
              fontSize: 14,
              marginTop: 16,
            }}
          >
            Page {page} sur {totalPages} ({total} cours au total)
          </p>
        </>
      )}
    </div>
  );
}

export default Courses;

