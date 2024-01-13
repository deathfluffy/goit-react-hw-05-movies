import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/MoviesApi';

import SearchBar from 'components/SearchBar/SearchBar';
import FilmsList from 'components/FilmList/FilmList';


export default function Movies  ()  {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <SearchBar setSearchParams={setSearchParams} />
      {movies.length > 0 && <FilmsList movies={movies} />}
    </>
  );
};

