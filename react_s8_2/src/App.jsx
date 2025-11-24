import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import CharacterGrid from "./components/CharacterGrid";
import FavoritesSidebar from "./components/FavoritesSidebar";

import {
  fetchCharacters,
  toggleFavorite,
  setFilterStatus,
} from "./store/moviesSlice";

import {
  selectState,
  selectFilteredCharacters,
  selectFavoriteCharacters,
} from "./store/selectors";

export default function App() {
  const dispatch = useDispatch();

  // state brut redux
  const { favoritesIds, filterStatus, loading, error } =
    useSelector(selectState);

  // state dérivé redux
  const filteredCharacters = useSelector(selectFilteredCharacters);
  const favoriteCharacters = useSelector(selectFavoriteCharacters);

  // Au montage: charger les personnages
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="container">
      {/* Header reçoit juste le nombre */}
      <Header likedCount={favoritesIds.length} />

      {/* FilterBar reçoit filter + fonction */}
      <FilterBar
        filter={filterStatus}
        onFilterChange={(status) => dispatch(setFilterStatus(status))}
      />

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="layout">
        {/* CharacterGrid reçoit liste + ids likés + fonction like */}
        <CharacterGrid
          characters={filteredCharacters}
          likedIds={favoritesIds}
          loading={loading}
          onToggleLike={(id) => dispatch(toggleFavorite(id))}
        />

        {/* Sidebar reçoit favoris + fonction like */}
        <FavoritesSidebar
          favorites={favoriteCharacters}
          onToggleLike={(id) => dispatch(toggleFavorite(id))}
        />
      </div>
    </div>
  );
}
