import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, themeStyle }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: end;
    gap: ${theme.spacings.default};
    width: 100%;
    padding: 6rem ${theme.spacings.default} 2rem 0;
    text-align: end;
    border-right: solid 0.1rem ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    background: ${themeStyle.darkTheme ? theme.colors.primaryColor : 'white'};
    color: ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    transition: 200ms ease-in-out;

    & > a {
      color: ${themeStyle.darkTheme ? 'white' : theme.colors.secondaryColor};
      font-weight: bold;
    }

    & > a::after {
      display: block;
      content: ' ';
      background: ${themeStyle.darkTheme ? 'white' : theme.colors.secondaryColor};
      width: 6rem;
      height: 0.3rem;
      margin: 0.8rem 0 0 auto;
    }
  `}
`;
