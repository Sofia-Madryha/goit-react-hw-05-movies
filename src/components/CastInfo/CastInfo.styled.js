const { default: styled } = require('styled-components');

export const CastContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;

export const CastImg = styled.img`
  width: 100px;
`;

export const CastItem = styled.li`
  width: 200px;
  heigt: 250px;
`;
