import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    & h1 {
      text-align: center;
      margin: 0 auto;
      display: block;
    }

    & h1::after {
      content: ' ';
      display: block;
      background-color: ${theme.colors.primaryColor};
      margin: 1.2rem auto 2rem auto;
      height: 0.3rem;
      width: 6rem;
    }
  `}
`;
