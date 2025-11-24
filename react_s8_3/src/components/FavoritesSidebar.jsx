function FavoritesSidebar({ favorites, onToggleLike }) {
    return (
        <div className="favorites-sidebar">
            <h2>Mes Favoris ({favorites.length})</h2>

            {favorites.length === 0 ? (
                <p style={{ color: '#95a5a6' }}>Aucun favori</p>
            ) : (
                favorites.map(character => (
                    <div key={character.id} className="favorite-item">
                        <img src={character.image} alt={character.name} />
                        <span>{character.name}</span>

                        <button
                            onClick={() => onToggleLike(character.id)}
                            style={{
                                marginLeft: 'auto',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '20px'
                            }}
                        >
                            ❤️
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default FavoritesSidebar;
