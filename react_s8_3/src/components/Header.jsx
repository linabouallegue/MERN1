function Header({ likedCount }) {
    return (
        <header className="header">
            <h1>Rick & Morty Characters (Zustand)</h1>

            <div className="liked-badge">
                Liked Characters: {likedCount} personnages likés
            </div>
        </header>
    );
}

export default Header;
