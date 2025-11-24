import { useEffect } from "react";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import CharacterGrid from "./components/CharacterGrid";
import FavoritesSidebar from "./components/FavoritesSidebar";

import { useCharactersStore } from "./store/useCharactersStore";

export default function App() {
  const {
    fetchCharacters,
    toggleFavorite,
    setFilterStatus,

    favoritesIds,
    filterStatus,
    loading,
    error,

    getFilteredCharacters,
    getFavoriteCharacters,
  } = useCharactersStore();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const filteredCharacters = getFilteredCharacters();
  const favoriteCharacters = getFavoriteCharacters();

  return (
    <div className="container">
      <Header likedCount={favoritesIds.length} />

      <FilterBar
        filter={filterStatus}
        onFilterChange={setFilterStatus}
      />

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="layout">
        <CharacterGrid
          characters={filteredCharacters}
          likedIds={favoritesIds}
          loading={loading}
          onToggleLike={toggleFavorite}
        />

        <FavoritesSidebar
          favorites={favoriteCharacters}
          onToggleLike={toggleFavorite}
        />
      </div>
    </div>
  );
}
