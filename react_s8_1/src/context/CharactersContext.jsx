import { createContext, useContext, useState, useEffect } from "react";

// 1. Créer le contexte
const CharactersContext = createContext();

// 2. Hook personnalisé pour utiliser le contexte
export const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error("useCharacters must be used within CharactersProvider");
  }
  return context;
};

// 3. Provider global
export const CharactersProvider = ({ children }) => {
  // --- États globaux ---
  const [characters, setCharacters] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // --- Charger les personnages depuis l'API Rick & Morty ---
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results); // 20 personnages
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // --- Fonction : liker / disliker ---
  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id)
        ? prev.filter((likedId) => likedId !== id) // retirer
        : [...prev, id] // ajouter
    );
  };

  // --- Obtenir les personnages likés ---
  const getLikedCharacters = () => {
    return characters.filter((char) => likedIds.includes(char.id));
  };

  // --- Obtenir les personnages filtrés ---
  const getFilteredCharacters = () => {
    if (filter === "all") return characters;

    return characters.filter(
      (char) => char.status.toLowerCase() === filter
    );
  };

  // --- Regrouper tout ce qu'on partage ---
  const value = {
    characters,
    likedIds,
    filter,
    loading,
    toggleLike,
    setFilter,
    getLikedCharacters,
    getFilteredCharacters,
  };

  // --- Retour Provider ---
  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
