import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    grid-column: span 2;
    grid-row: span 2;
  `}
`;
