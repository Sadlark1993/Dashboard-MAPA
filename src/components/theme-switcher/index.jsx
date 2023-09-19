import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/ProductionValue';

export const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);
  const { themeStyle } = useContext(DataContext);

  const switchTheme = () => {
    setDark((c) => !c);
    themeStyle.switchTheme();
    console.log(themeStyle.darkTheme);
  };

  return (
    <Styled.compStyle onClick={switchTheme}>
      <Styled.circle className={themeStyle.darkTheme ? 'dark' : ''} />
    </Styled.compStyle>
  );
};

ThemeSwitcher.propTypes = {};
