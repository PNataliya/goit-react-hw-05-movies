import PropTypes from 'prop-types';
// import defaultPoster from '../../images/noposter.jpg';
import {
  MovieMainInfoStyled,
  Poster,
  TitleMain,
  UserScore,
  TitleOverview,
  Overview,
  TitleGenres,
} from './MovieMainInfo.styled';

export const MovieMainInfo = ({ poster, title, score, overview, genres }) => {
  //   console.log(poster);
  //   console.log(title);

  // function fetchFilmPhoto(poster) {
  //   const noPosterAvaliable = defaultPoster;

  //   return poster
  //     ? `https://image.tmdb.org/t/p/w500${poster}`
  //     : noPosterAvaliable;
  // }

  return (
    <MovieMainInfoStyled>
      <div>
        <Poster src={poster} alt={title} width="240" height="320" />
      </div>
      <div>
        <TitleMain>{title}</TitleMain>
        <UserScore>User Score: {score}%</UserScore>
        <TitleOverview>Overview</TitleOverview>
        <Overview>{overview}</Overview>
        <TitleGenres>Genres</TitleGenres>
        <p>{genres}</p>
      </div>
    </MovieMainInfoStyled>
  );
};

MovieMainInfo.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  score: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
};
