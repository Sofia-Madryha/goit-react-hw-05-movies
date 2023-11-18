const { default: styled } = require('styled-components');

export const ReviewContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.lightOrange};
  padding: 15px;
`;
