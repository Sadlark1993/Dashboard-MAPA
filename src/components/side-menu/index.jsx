import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const SideMenu = ({ sideLinks }) => {
  return (
    <Styled.compStyle>
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
