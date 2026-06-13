function SearchBox({ city, onCityChange, onSearch }) {
  return (
    <div className="search-box">
      <h1>Weather checker</h1>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <button onClick={onSearch}>Check</button>
    </div>
  )
}

export default SearchBox