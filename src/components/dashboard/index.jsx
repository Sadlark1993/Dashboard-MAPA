import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Dashboard = ({ children }) => {
  return <Styled.compStyle>{children}</Styled.compStyle>;
};

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};
