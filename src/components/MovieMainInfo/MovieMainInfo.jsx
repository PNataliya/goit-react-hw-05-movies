import PropTypes from 'prop-types';

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
  // const noPosterAvaliable =
  //   'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';
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
