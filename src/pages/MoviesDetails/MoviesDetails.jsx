import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/MoviesApi';
import css from './MoviesDetails.module.css'
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <div className={css.backLink}>
        <Link to={backLinkHref}>
          Go back<span>.</span>
        </Link>
      </div>
      <div className={css.filmWrapper}>
        <img
          className={css.filmImg}
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt="get"
        />
        <div>
          <h2 className={css.titleFilm}>{movie.original_title}</h2>
          <h3 className={css.filmSubTitle}>Rating: {Math.round(movie.vote_average)}</h3>
          <h3 className={css.filmSubTitle}>Overview</h3>
          <p className={css.filmDescr}>{movie.overview}</p>
          <h3 className={css.filmSubTitle}>Genres</h3>
          <ul className={css.styledListDescr}>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul className={css.styledList}>
          <li className={css.listItem}>
            <NavLink to="cast" state={location.state}>
              Cast<span>.</span>
            </NavLink>
          </li>
          <li className={css.listItem}>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>.</span>
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;