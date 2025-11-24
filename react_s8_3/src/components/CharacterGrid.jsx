import CharacterCard from './CharacterCard';

function CharacterGrid({ characters, likedIds, onToggleLike, loading }) {
    if (loading) {
        return <div className="loading">Chargement...</div>;
    }

    return (
        <div className="character-grid">
            {characters.map(character => (
                <CharacterCard
                    key={character.id}
                    character={character}
                    isLiked={likedIds.includes(character.id)}
                    onToggleLike={onToggleLike}
                />
            ))}
        </div>
    );
}

export default CharacterGrid;
