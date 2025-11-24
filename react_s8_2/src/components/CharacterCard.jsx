function CharacterCard({ character, isLiked, onToggleLike }) {
    return (
        <div className="character-card">

            {/* Bouton Like */}
            <button
                className={`like-btn ${isLiked ? "liked" : ""}`}
                onClick={() => onToggleLike(character.id)}
            >
                {isLiked ? "❤️" : "🤍"}
            </button>

            {/* Image */}
            <img src={character.image} alt={character.name} />

            {/* Informations */}
            <div className="character-info">
                <div className="character-name">{character.name}</div>

                <div
                    className={`character-status status-${character.status.toLowerCase()}`}
                >
                    {character.status} – {character.species}
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
