import { useState, useEffect } from "react";

export default function ShoppingListApp() {
  // --- États pour la liste ---
  const [items, setItems] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  // --- États pour le timer Pomodoro ---
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Charger la liste au montage
  useEffect(() => {
    const saved = localStorage.getItem("shopping-list");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // Sauvegarder la liste à chaque modification
  useEffect(() => {
    localStorage.setItem("shopping-list", JSON.stringify(items));
  }, [items]);

  // Timer avec cleanup
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            alert("Temps de course écoulé !");
          } else {
            setMinutes((m) => m - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((s) => s - 1);
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  // --- Actions liste ---
  const addItem = () => {
    if (!inputName.trim()) return;
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: inputName.trim(),
        price: inputPrice ? parseFloat(inputPrice) : 0,
        bought: false,
      },
    ]);
    setInputName("");
    setInputPrice("");
  };

  const toggleBought = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, bought: !it.bought } : it))
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  // --- Timer helpers ---
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  // --- Valeurs dérivées ---
  const totalPrice = items.reduce((sum, it) => sum + (it.price || 0), 0);
  const boughtCount = items.filter((it) => it.bought).length;

  return (
    <div style={{ maxWidth: 720, margin: "48px auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Liste de Courses + Pomodoro</h1>

      {/* TIMER */}
      <div
        style={{
          background: "#34495e",
          color: "white",
          padding: 20,
          borderRadius: 12,
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        <h3>Timer</h3>
        <div style={{ fontSize: 48, fontWeight: "bold", margin: "16px 0" }}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={() => setIsActive((v) => !v)}
            style={{
              padding: "10px 20px",
              background: isActive ? "#f39c12" : "#27ae60",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            {isActive ? "Pause" : "Démarrer"}
          </button>
          <button
            onClick={resetTimer}
            style={{
              padding: "10px 20px",
              background: "#95a5a6",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* FORMULAIRE AJOUT */}
      <div
        style={{
          background: "#ecf0f1",
          padding: 16,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem()}
            placeholder="Nom de l’article…"
            style={{
              flex: 2,
              padding: 10,
              fontSize: 16,
              border: "1px solid #bdc3c7",
              borderRadius: 6,
            }}
          />
          <input
            type="number"
            value={inputPrice}
            onChange={(e) => setInputPrice(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem()}
            placeholder="Prix…"
            step="0.01"
            style={{
              flex: 1,
              padding: 10,
              fontSize: 16,
              border: "1px solid #bdc3c7",
              borderRadius: 6,
            }}
          />
          <button
            onClick={addItem}
            style={{
              padding: "10px 20px",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Ajouter
          </button>
        </div>
      </div>

      {/* LISTE */}
      <div>
        {items.map((it) => (
          <div
            key={it.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: 14,
              marginBottom: 10,
              background: it.bought ? "#d5f4e6" : "white",
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <input
              type="checkbox"
              checked={it.bought}
              onChange={() => toggleBought(it.id)}
              style={{ width: 20, height: 20 }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: it.bought ? "line-through" : "none",
                color: it.bought ? "#95a5a6" : "#2c3e50",
                fontSize: 16,
              }}
            >
              {it.name}
            </span>
            <span style={{ fontWeight: "bold", marginRight: 8 }}>
              {Number(it.price || 0).toFixed(2)} DT
            </span>
            <button
              onClick={() => deleteItem(it.id)}
              style={{
                padding: "6px 12px",
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {/* STATISTIQUES */}
      <div
        style={{
          marginTop: 16,
          padding: 14,
          background: "#3498db",
          color: "white",
          borderRadius: 8,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <strong>Total :</strong> {items.length} article(s) |{" "}
          <strong>Achetés :</strong> {boughtCount}
        </div>
        <div>
          <strong>Prix total :</strong> {totalPrice.toFixed(2)} DT
        </div>
      </div>
    </div>
  );
}
