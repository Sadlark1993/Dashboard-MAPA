import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme, themeStyle }) => css`
    grid-column: span 2;
    height: 400px;
    text-align: center;
    border: solid 0.1rem ${themeStyle.darkTheme ? 'white' : theme.colors.primaryColor};
    border-radius: 1rem;
    padding: 1.2rem;
  `}
`;

export const wrapper = styled.div`
  height: 85%;
  width: 100%;
`;

export const colorIndex = styled.div`
  ${({ color1, color2, color3 }) => css`
    display: flex;
    width: fit-content;
    justify-content: center;
    gap: 1.6rem;
    margin: 0 auto;

    & span:before {
      display: inline-block;
      content: ' ';
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.8rem;
      position: relative;
      top: 0.3rem;
    }

    & :first-child:before {
      background: ${color1};
    }
    & :nth-child(2):before {
      background: ${color2};
    }
    & :nth-child(3):before {
      background: ${color3};
    }
  `}
`;
