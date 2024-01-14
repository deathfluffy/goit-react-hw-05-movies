import { useLocation, Link } from 'react-router-dom';
import css from './FilmList.module.css';

export default function FilmsList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.filmList}>
      {movies.map(({ id, poster_path, original_title }) => (
        <li key={id} className={css.filmItem}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <img
              className={css.filmImg}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
               width="450"
               height="450"
            />
            <p className={css.filmTitle}>{original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
