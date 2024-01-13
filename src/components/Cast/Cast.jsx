import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/MoviesApi'; 
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import css from './Cast.module.css';

export default function Cast() {
   const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
    }, [movieId]);
    return (
    <div>
      {
        <ul className={css.styledList} >
          {cast.map(({ id, profile_path, original_name, character }) => (
            <il className={css.itemil} key={id}>
              <img
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </il>
          ))}
        </ul>
      }
    </div>
  );
}