import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/MoviesApi';
import css from './Reviews.module.css';
export default function Reviews  ()  {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews.</h3>
  ) : (
    <ul className={css.styledList}>
      {reviews.map(({ id, author, content }) => (
        <li className={css.itemList} key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <p className={css.descr}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

