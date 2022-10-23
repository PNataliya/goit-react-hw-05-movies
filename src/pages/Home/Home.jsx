import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeStyled, Titel } from './Home.styled';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '62a0747aac137915f35199437084137e';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const url = `${API_URL}trending/movie/day?api_key=${API_KEY}`;

    function fetchMovie() {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setMovies(
            data.results.map(result => ({ id: result.id, title: result.title }))
          );
        })
        .catch(error => console.log(error));
    }

    fetchMovie();
  }, []);

  return (
    <HomeStyled>
      <Titel>Trending today</Titel>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </HomeStyled>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
