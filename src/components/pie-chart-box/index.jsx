import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useContext } from 'react';
import { DataContext } from '../../context/ProductionValue';

export const PieChartBox = ({ title, visible, forwardedRef, data }) => {
  const { themeStyle } = useContext(DataContext);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Styled.compStyle ref={forwardedRef} themeStyle={themeStyle}>
      <h3>{title}</h3>

      {visible && (
        <>
          <Styled.wrapper>
            <ResponsiveContainer width="99%" height="100%">
              <PieChart width={400} height={400}>
                <Tooltip />
                <Pie
                  isAnimationActive={true}
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={130}
                  dataKey="value"
                  animationDuration={900}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Styled.wrapper>
          <Styled.colorIndex color1={COLORS[0]} color2={COLORS[1]} color3={COLORS[2]}>
            <span>{data[0].name}</span>
            <span>{data[1].name}</span>
            <span>{data[2].name}</span>
          </Styled.colorIndex>
        </>
      )}
    </Styled.compStyle>
  );
};

PieChartBox.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  forwardedRef: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
