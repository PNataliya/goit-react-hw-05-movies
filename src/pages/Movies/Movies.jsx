import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesStyled, Input, Button, Form } from './Movies.styled';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '62a0747aac137915f35199437084137e';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(queryParam ? queryParam : '');
  const location = useLocation();

  useEffect(() => {
    const url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

    if (query === '') {
      return;
    }

    function fetchMovie() {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setMovies(
            data.results.map(({ id, title }) => ({ id: id, title: title }))
          );
        })
        .catch(error => console.log(error));
    }

    fetchMovie();
  }, [query]);

  const handleSubbmit = e => {
    e.preventDefault();
    const value = e.target.query.value;
    setQuery(value);
    setSearchParams({ query: value });
    // e.target.query.value = "";
  };

  return (
    <MoviesStyled>
      <Form action="" onSubmit={handleSubbmit}>
        <Input type="text" name="query" defaultValue={query} />
        <Button type="submit">Search</Button>
      </Form>

      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={`${id}`}
                search={{ querySerch: `query=${query}` }}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </MoviesStyled>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
