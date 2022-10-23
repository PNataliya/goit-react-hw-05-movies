import PropTypes from 'prop-types';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { HiArrowUturnLeft } from 'react-icons/hi2';
// import defaultPoster from '../../images/noposter.jpg';
import {
  MovieDetailsStyled,
  BackLinkStyled,
  AdditionalInfo,
  Arrow,
  Titel,
} from './MovieDetalies.styled';

import { MovieMainInfo } from 'components/MovieMainInfo/MovieMainInfo';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '62a0747aac137915f35199437084137e';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    const urlDetails = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;

    function fetchMovie() {
      fetch(urlDetails)
        .then(response => response.json())
        .then(data => {
          setMovie({
            poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            title: data.title,
            score: Number.parseInt(data.vote_average * 10),
            overview: data.overview,
            genres: data.genres
              .reduce((acc, genre) => (acc += genre.name + ' '), '')
              .trim(),
          });
        })
        .catch(error => console.log(error));
    }

    fetchMovie();
  }, [id]);

  return (
    <main>
      <MovieDetailsStyled>
        <BackLinkStyled to={backLink}>
          <Arrow>
            <HiArrowUturnLeft size={12} />
          </Arrow>
          Go back
        </BackLinkStyled>

        <MovieMainInfo
          poster={movie.poster}
          title={movie.title}
          score={movie.score}
          overview={movie.overview}
          genres={movie.genres}
        />

        <Titel>Additional information</Titel>
        <AdditionalInfo>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </AdditionalInfo>

        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </MovieDetailsStyled>
    </main>
  );
};

MovieDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.exact({
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.exact({
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  backLinkHref: PropTypes.string,
  additionalInfo: PropTypes.arrayOf(
    PropTypes.exact({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  path: PropTypes.string,
};

export default MovieDetails;
