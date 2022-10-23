import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ImHome3, ImFilm } from 'react-icons/im';
import {
  Container,
  HeaderStyled,
  LinkStyled,
  SvgHome,
  SvgMovies,
} from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <nav>
          <LinkStyled to="/" end>
            <SvgHome>
              <ImHome3 size={18} />
            </SvgHome>
            Home
          </LinkStyled>
          <LinkStyled to="movies">
            <SvgMovies>
              <ImFilm size={18} />
            </SvgMovies>
            Movies
          </LinkStyled>
        </nav>
      </HeaderStyled>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
