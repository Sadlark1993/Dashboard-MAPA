import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 24.5rem;
    gap: 1.4rem;
    padding: 1.4rem;
    grid-auto-flow: dense;
  `}
`;
