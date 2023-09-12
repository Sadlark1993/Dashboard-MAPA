import PropTypes from 'prop-types';
import { LineChart, Line, Tooltip } from 'recharts';

import * as Styled from './styles';

export const ChartBox = ({ imgSrc, title, year, value, data }) => {
  console.log(Object.keys(data[0])[1]);
  return (
    <Styled.compStyle>
      <Styled.halfContainer>
        <Styled.titleContainer>
          <img src={imgSrc} />
          <h4>{title}</h4>
        </Styled.titleContainer>
        <div>
          <dt>{year}:</dt>
          <dd>{value}</dd>
        </div>
        <a href="#">ver tudo</a>
      </Styled.halfContainer>
      <Styled.halfContainer>
        <LineChart width={100} height={100} data={data}>
          <Tooltip />
          <Line dot={false} type="monotone" dataKey={Object.keys(data[0])[1]} stroke="#8884d8" strokeWidth={2} />
        </LineChart>
        <span>X%</span>
      </Styled.halfContainer>
    </Styled.compStyle>
  );
};

ChartBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
