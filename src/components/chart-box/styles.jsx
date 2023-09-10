import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    border: solid 1px ${theme.colors.primaryColor};
    border-radius: 1rem;
    padding: 1.2rem;
    display: flex;
    height: 24.5rem;
    & img {
      width: 3rem;
      height: 3.2rem;
    }
  `}
`;

export const halfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & span {
    text-align: right;
  }
`;

export const titleContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
