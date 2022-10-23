import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsStyled = styled.div`
  padding: 40px;
`;

export const BackLinkStyled = styled(Link)`
  display: inline-block;
  padding: 3px 10px;
  margin-bottom: 10px;
  border: 1px solid #a8a8ee;
  border-radius: 10px;
  color: #000000;
  text-decoration: none;

  :hover,
  :focus {
    color: #ffffff;
    background-color: #a8a8ee;
  }
`;

export const AdditionalInfo = styled.ul`
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #ccc8c8;

  a {
    display: block;
    margin-bottom: 10px;
  }
`;

export const Arrow = styled.span`
  margin-right: 16px;
`;

export const Titel = styled.h2`
  margin: 12px 16px;
`;
