import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    width: 4.05rem;
    height: 2rem;
    background: #c8dbf9;
    border: solid 0.15rem black;
    border-radius: 2rem;
    cursor: pointer;
  `}
`;

export const circle = styled.div`
  ${({ theme }) => css`
    width: 1.8rem;
    height: 1.8rem;
    background: #1351b4;
    border-radius: 50%;
    position: relative;
    top: -0.1rem;
    transition: 500ms ease-in-out;
    &.dark {
      transform: translate(2rem);
    }
  `}
`;
