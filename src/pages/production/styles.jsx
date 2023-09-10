import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    & h1 {
      text-align: center;
      margin: 0 auto;
      display: block;
    }
  `}
`;
