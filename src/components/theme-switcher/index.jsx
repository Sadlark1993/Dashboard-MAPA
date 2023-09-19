import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

export const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  return (
    <Styled.compStyle
      onClick={() => {
        setDark((c) => !c);
        console.log(dark);
      }}
    >
      <Styled.circle className={dark ? 'dark' : ''} />
    </Styled.compStyle>
  );
};

ThemeSwitcher.propTypes = {};
