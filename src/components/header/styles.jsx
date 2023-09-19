import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, themeStyle }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background: ${themeStyle.darkTheme ? theme.colors.primaryColor : 'white'};
    color: ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    transition: 200ms ease-in-out;

    & > img {
      max-height: 7rem;
    }

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
        color: ${themeStyle.darkTheme ? 'white' : theme.colors.secondaryColor};
      }
    }
  `}
`;
