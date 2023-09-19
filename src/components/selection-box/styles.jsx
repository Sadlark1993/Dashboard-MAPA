import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, themeStyle }) => css`
    border: solid 0.1rem ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    border-radius: 1rem;
    padding: 1.2rem;
    height: 50.4rem;
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    & h4 {
      margin-top: 2rem;
      text-align: center;
    }

    & h4::after {
      content: ' ';
      display: block;
      width: 6rem;
      height: 0.3rem;
      background: ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
      margin: 0.85rem auto 2rem auto;
    }
  `}
`;

export const selectionContent = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const inputBlock = styled.div`
  ${({ theme }) => css`
    width: 100%;
    & label {
      display: block;
      font-size: ${theme.fonts.sizes.xsmall};
    }

    & select {
      display: block;
      width: 100%;
      margin-top: 0.85rem;
      margin-bottom: 1.2rem;
      padding: 0.2rem 0.6rem;
    }
  `}
`;
