import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, themeStyle }) => css`
    grid-column: span 2;
    border: solid 0.1rem ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    border-radius: 1rem;
    height: 40rem;
    padding: 1.2rem;
    text-align: center;
    & h3 {
      margin-bottom: 2rem;
    }
  `}
`;
