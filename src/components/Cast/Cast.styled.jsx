import styled from '@emotion/styled';

export const CastStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const CastItemStyled = styled.li`
  flex-basis: calc(12% - 30px);

  :not(:last-child) {
    margin-bottom: 30px;
  }

  p {
    margin: 0;
  }
`;

export const Photo = styled.img`
  width: 100%;

  margin-bottom: 14px;
  border: 2px solid #fff;
  border-radius: 14px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const InfoBox = styled.div`
  flex-grow: 1;
`;
export const ActorName = styled.h2`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const Character = styled.span`
  font-weight: bold;
`;
