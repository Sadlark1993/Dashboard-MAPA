import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
  `}
`;
