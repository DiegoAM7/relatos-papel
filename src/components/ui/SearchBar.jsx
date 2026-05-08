const SearchBar = ({value, onChange}) => {
    return (
        <input
            type="search"
            className="search-bar"
            placeholder="Buscar por titulo o autor..."
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    );
};

export default SearchBar;