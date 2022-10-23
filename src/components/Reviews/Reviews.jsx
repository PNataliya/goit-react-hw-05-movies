import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsStyled, ReviewsItemStyled } from './Reviews.styled';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '62a0747aac137915f35199437084137e';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const urlReviews = `${API_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;

    function fetchReviews() {
      fetch(urlReviews)
        .then(response => response.json())
        .then(data => {
          setReviews(
            data.results.map(({ author_details, content }) => ({
              author: author_details.username,
              content: content,
            }))
          );
        })
        .catch(error => console.log(error));
    }

    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsStyled>
          {reviews.map(({ author, content }, index) => {
            return (
              <ReviewsItemStyled key={index}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </ReviewsItemStyled>
            );
          })}
        </ReviewsStyled>
      ) : (
        <p>We don't have any reviews for this movie. You can be first</p>
      )}
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
export default Reviews;
