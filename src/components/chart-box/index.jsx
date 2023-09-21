import PropTypes from 'prop-types';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';

import * as Styled from './styles';
import { useContext } from 'react';
import { DataContext } from '../../context/ProductionValue';

export const ChartBox = ({ imgSrc, title, year, value, data, prefix, suffix }) => {
  const { themeStyle } = useContext(DataContext);

  const Chart = ({ data }) => {
    //setTimeout(() => {
    return (
      <ResponsiveContainer width={'99%'} height={'50%'}>
        <LineChart width={100} height={100} data={data}>
          <Tooltip position={{ x: 30, y: 80 }} />
          <XAxis hide={true} dataKey={Object.keys(data[0])[0]} />
          <Line dot={false} type="monotone" dataKey="valor" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
    //}, 500);
  };

  return (
    <Styled.compStyle themeStyle={themeStyle}>
      <Styled.halfContainer>
        <Styled.titleContainer>
          <img src={imgSrc} />
          <h4>{title}</h4>
        </Styled.titleContainer>
        <div>
          <dt>{year}:</dt>
          <dd>{prefix + Math.round(value / 1000000) + suffix}</dd>
        </div>
        <a href="#">ver tudo</a>
      </Styled.halfContainer>
      <Styled.halfContainer>
        {data.length > 1 && <Chart data={data} />}
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
    return growth > 0 ? `+${growth}` : `${growth}`;
  }
};

ChartBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  prefix: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
};
