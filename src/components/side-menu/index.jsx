import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../context/ProductionValue';

export const SideMenu = ({ sideLinks }) => {
  const { themeStyle } = useContext(DataContext);

  return (
    <Styled.compStyle themeStyle={themeStyle}>
      {sideLinks.map((link) => (
        <Link to={link.href} key={link.name}>
          {link.name}
        </Link>
      ))}
    </Styled.compStyle>
  );
};

SideMenu.propTypes = {
  sideLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
