import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: end;
    gap: ${theme.spacings.default};
    width: 100%;
    padding: 6rem ${theme.spacings.default} 2rem 0;
    text-align: end;
    border-right: solid 0.1rem ${theme.colors.primaryColor};

    & > a {
      color: ${theme.colors.secondaryColor};
      font-weight: bold;
    }

    & > a::after {
      display: block;
      content: ' ';
      background: ${theme.colors.secondaryColor};
      width: 6rem;
      height: 0.3rem;
      margin: 0.8rem 0 0 auto;
    }
  `}
`;
