import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.4rem;
    padding: 1.4rem;
  `}
`;
