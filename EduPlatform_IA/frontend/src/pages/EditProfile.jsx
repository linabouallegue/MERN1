import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

function EditProfile() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [bio, setBio] = useState("");
    const [website, setWebsite] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (!user) return;

        async function fetchProfile() {
            try {
                const res = await api.get("/users/me/profile");
                setBio(res.data.bio || "");
                setWebsite(res.data.website || "");
            } catch (err) {
                console.error("ERREUR /users/me/profile ===>", err);
                setError("Erreur lors du chargement du profil");
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setSaving(true);

        try {
            await api.put("/users/me/profile", { bio, website });
            setSuccess("Profil mis à jour avec succès !");
            setTimeout(() => navigate("/profile"), 1500);
        } catch (err) {
            console.error("ERREUR PUT /users/me/profile ===>", err);
            setError(err.response?.data?.message || "Erreur lors de la mise à jour");
        } finally {
            setSaving(false);
        }
    };

    if (!user) {
        return (
            <div style={{ textAlign: "center", marginTop: 40 }}>
                Vous devez être connecté pour modifier votre profil.
            </div>
        );
    }

    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: 40 }}>
                Chargement du profil...
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "40px auto",
                padding: "0 16px 40px",
            }}
        >
            <h2>Modifier mon profil</h2>
            <p style={{ color: "#9ca3af", marginBottom: 24 }}>
                Personnalisez votre profil EduPlatform.
            </p>

            <div
                style={{
                    backgroundColor: "#111827",
                    borderRadius: 18,
                    padding: 24,
                    border: "1px solid #1f2937",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
                }}
            >
                {/* User info (read-only) */}
                <div style={{ marginBottom: 20 }}>
                    <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 4 }}>
                        Nom d'utilisateur
                    </p>
                    <p style={{ fontWeight: 500 }}>{user.username}</p>
                </div>

                <div style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 4 }}>
                        Email
                    </p>
                    <p style={{ fontWeight: 500 }}>{user.email}</p>
                </div>

                <hr style={{ border: "none", borderTop: "1px solid #1f2937", marginBottom: 24 }} />

                {/* Editable form */}
                <form onSubmit={handleSubmit}>
                    {error && (
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
                            {error}
                        </div>
                    )}

                    {success && (
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
                            {success}
                        </div>
                    )}

                    <div style={{ marginBottom: 16 }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: 14,
                                fontWeight: 500,
                                marginBottom: 6,
                                color: "#e5e7eb",
                            }}
                        >
                            Bio
                        </label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Parlez-nous de vous..."
                            rows={4}
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

                    <div style={{ marginBottom: 24 }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: 14,
                                fontWeight: 500,
                                marginBottom: 6,
                                color: "#e5e7eb",
                            }}
                        >
                            Site web
                        </label>
                        <input
                            type="url"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            placeholder="https://votre-site.com"
                            style={{
                                width: "100%",
                                padding: 12,
                                borderRadius: 10,
                                border: "1px solid #374151",
                                backgroundColor: "#1f2937",
                                color: "#f9fafb",
                                fontSize: 14,
                            }}
                        />
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                        <button
                            type="submit"
                            disabled={saving}
                            style={{
                                flex: 1,
                                padding: 12,
                                backgroundColor: "#22c55e",
                                color: "white",
                                border: "none",
                                borderRadius: 999,
                                cursor: "pointer",
                                fontSize: 15,
                                fontWeight: 600,
                            }}
                        >
                            {saving ? "Enregistrement..." : "Enregistrer"}
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/profile")}
                            style={{
                                padding: "12px 24px",
                                backgroundColor: "#374151",
                                color: "white",
                                border: "none",
                                borderRadius: 999,
                                cursor: "pointer",
                                fontSize: 15,
                                fontWeight: 500,
                            }}
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
