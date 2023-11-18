export const SearchBar = ({ onSubmit, SearchValue }) => {
  return (
    <div className="searchbar">
      <form className="search-form" onSubmit={onSubmit}>
        <input
          className="search-form-input"
          value={SearchValue}
          type="text"
          name="query"
          placeholder="Search"
        />{' '}
        <button className="search-form-button">Search</button>
      </form>
    </div>
  );
};
