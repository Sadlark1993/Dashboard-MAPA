import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, themeStyle }) => css`
    width: 100%;
    background: ${themeStyle.darkTheme ? theme.colors.primaryColor : 'white'};
    color: ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    transition: 200ms ease-in-out;
    & h1 {
      text-align: center;
      margin: 0 auto;
      display: block;
    }

    & h1::after {
      content: ' ';
      display: block;
      background-color: ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
      margin: 1.2rem auto 2rem auto;
      height: 0.3rem;
      width: 6rem;
    }
  `}
`;
