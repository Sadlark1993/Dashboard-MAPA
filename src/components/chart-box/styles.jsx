import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, themeStyle }) => css`
    border: solid 1px ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    border-radius: 1rem;
    padding: 1.2rem;
    display: flex;
    & img {
      width: 3rem;
      height: 3.2rem;
    }

    & a {
      font-size: ${theme.fonts.sizes.xsmall};
      color: #1351b4;
      font-weight: bold;
    }
  `}
`;

export const halfContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 0%;
    & dt,
    dd {
      font-weight: bold;
      font-size: ${theme.fonts.sizes.xsmall};
      margin-bottom: 1rem;
    }
  `}
`;

export const titleContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const percent = styled.span`
  ${({ theme, growth }) => css`
    color: ${growth > 0 ? '#02AB47' : '#FF6347'};
    font-weight: bold;
    font-size: ${theme.fonts.sizes.large};
  `}
`;
