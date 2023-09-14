import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    grid-column: span 2;
    height: 400px;
  `}
`;
