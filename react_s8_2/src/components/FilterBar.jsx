function FilterBar({ filter, onFilterChange }) {
    const filters = ['all', 'alive', 'dead', 'unknown'];

    return (
        <div className="filter-bar">
            {filters.map(f => (
                <button
                    key={f}
                    className={`filter-btn ${filter === f ? 'active' : ''}`}
                    onClick={() => onFilterChange(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;
