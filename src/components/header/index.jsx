import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const Header = ({ links }) => {
  return (
    <Styled.compStyle>
      <img src="./dist/img/logo.png" alt="Logo MAPA" />
      <div>
        {links.map((link) => (
          <a href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </Styled.compStyle>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
