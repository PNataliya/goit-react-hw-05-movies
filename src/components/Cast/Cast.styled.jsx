import styled from '@emotion/styled';

export const CastStyled = styled.ul`
  list-style: none;
`;

export const CastItemStyled = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }

  p {
    margin: 0;
  }
`;

export const Photo = styled.img`
  margin-bottom: 14px;
  border: 2px solid #fff;
  border-radius: 14px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
`;
