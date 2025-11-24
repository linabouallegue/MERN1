export const selectState = (state) => state.movies;

export const selectFilteredCharacters = (state) => {
  const { characters, filterStatus } = selectState(state);

  if (filterStatus === "all") return characters;

  return characters.filter(
    (c) => c.status.toLowerCase() === filterStatus
  );
};

export const selectFavoriteCharacters = (state) => {
  const { characters, favoritesIds } = selectState(state);
  return characters.filter((c) => favoritesIds.includes(c.id));
};
