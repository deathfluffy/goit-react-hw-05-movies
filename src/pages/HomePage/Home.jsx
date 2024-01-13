import { useEffect, useState } from 'react';
import css from './Home.module.css'
import { getTrendingMovies } from 'services/MoviesApi'; 

import FilmsList from 'components/FilmList/FilmList';

export default function Home ()  {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <FilmsList movies={movies} />
    </>
  );
};

