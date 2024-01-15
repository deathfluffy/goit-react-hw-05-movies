import { useState, useEffect } from 'react';
import css from './SearchBar.module.css';

export default function SearchBar({ setSearchParams }) {
  const [query, setQuery] = useState('');

  
  useEffect(() => {
    const storedQuery = localStorage.getItem('searchQuery');
    if (storedQuery) {
      setQuery(storedQuery);
      setSearchParams({ query: storedQuery });
    }
  }, [setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
    
    localStorage.setItem('searchQuery', query);
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.inputSearch}
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button className={css.searchButton} type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
};
