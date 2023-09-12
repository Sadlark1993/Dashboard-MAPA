import PropTypes from 'prop-types';
import { LineChart, Line, Tooltip, XAxis } from 'recharts';

import * as Styled from './styles';

export const ChartBox = ({ imgSrc, title, year, value, data }) => {
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
        {data.length > 1 && (
          <LineChart width={100} height={100} data={data}>
            <Tooltip position={{ x: 30, y: 80 }} />
            <XAxis hide={true} dataKey={Object.keys(data[0])[0]} />
            <Line dot={false} type="monotone" dataKey={Object.keys(data[0])[1]} stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        )}
        <Styled.percent growth={growthCalc(data)}>{growthCalc(data)}%</Styled.percent>
      </Styled.halfContainer>
    </Styled.compStyle>
  );
};

const growthCalc = (data) => {
  if (data.length > 1) {
    const before = Object.values(data[data.length - 2])[1];
    const after = Object.values(data[data.length - 1])[1];
    const growth = Math.round(((after - before) / before) * 100);
    return growth > 0 ? `+${growth}` : `-${growth}`;
  }
};

ChartBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
