import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 25rem 1fr;
  `}
`;
