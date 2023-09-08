import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      align-content: center;

      & > a {
        display: block;
        height: fit-content;
        font-family: ${theme.fonts.family.primaryFont};
        color: ${theme.colors.secondaryColor};
      }
    }
  `}
`;
