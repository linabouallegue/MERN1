import { create } from "zustand";

export const useCharactersStore = create((set, get) => ({
  // ✅ STATE GLOBAL
  characters: [],
  favoritesIds: [],
  filterStatus: "all",
  loading: false,
  error: null,

  // ✅ ACTIONS
  fetchCharacters: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      if (!res.ok) throw new Error("Erreur API Rick & Morty");
      const data = await res.json();
      set({ characters: data.results, loading: false });
    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  toggleFavorite: (id) => {
    const favs = get().favoritesIds;
    set({
      favoritesIds: favs.includes(id)
        ? favs.filter((x) => x !== id)
        : [...favs, id],
    });
  },

  setFilterStatus: (status) => set({ filterStatus: status }),

  // ✅ SELECTORS / DONNÉES DÉRIVÉES
  getFilteredCharacters: () => {
    const { characters, filterStatus } = get();
    if (filterStatus === "all") return characters;
    return characters.filter(
      (c) => c.status.toLowerCase() === filterStatus
    );
  },

  getFavoriteCharacters: () => {
    const { characters, favoritesIds } = get();
    return characters.filter((c) => favoritesIds.includes(c.id));
  },
}));
