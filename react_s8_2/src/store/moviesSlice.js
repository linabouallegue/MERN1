import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * Thunk async : charge les personnages depuis l’API Rick & Morty
 */
export const fetchCharacters = createAsyncThunk(
  "movies/fetchCharacters",
  async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) throw new Error("Erreur API Rick & Morty");
    const data = await res.json();
    return data.results; // tableau de personnages
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    characters: [],        // liste complète
    favoritesIds: [],      // ids likés
    filterStatus: "all",   // all | alive | dead | unknown
    loading: false,
    error: null,
  },

  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.favoritesIds.includes(id)) {
        state.favoritesIds = state.favoritesIds.filter((x) => x !== id);
      } else {
        state.favoritesIds.push(id);
      }
    },

    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite, setFilterStatus } = moviesSlice.actions;
export default moviesSlice.reducer;
