import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastStyled, CastItemStyled, Photo } from './Cast.styled';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '62a0747aac137915f35199437084137e';
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const urlCast = `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

    function fetchActors() {
      fetch(urlCast)
        .then(response => response.json())
        .then(data => {
          setActors(
            data.cast.map(({ profile_path, name, character }) => {
              return {
                poster: profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : placeHolder,
                name: name,
                character: character,
              };
            })
          );
        })
        .catch(error => console.log(error));
    }

    fetchActors();
  }, [id]);

  return (
    <CastStyled>
      {actors.map(({ poster, name, character }) => {
        return (
          <CastItemStyled key={name}>
            <Photo src={poster} alt={name} width="180" height="240" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </CastItemStyled>
        );
      })}
    </CastStyled>
  );
};

Cast.propTypes = {
  actors: PropTypes.string,
};

export default Cast;
