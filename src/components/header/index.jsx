import PropTypes from 'prop-types';
import * as Styled from './styles';
import { ThemeSwitcher } from '../theme-switcher';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/ProductionValue';

export const Header = ({ links }) => {
  const { themeStyle } = useContext(DataContext);

  return (
    <Styled.compStyle themeStyle={themeStyle}>
      <img src={themeStyle.darkTheme ? './dist/img/logo-dark.png' : './dist/img/logo.png'} alt="Logo MAPA" />
      <div>
        {links.map((link) => (
          <a href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
        <ThemeSwitcher />
      </div>
    </Styled.compStyle>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
