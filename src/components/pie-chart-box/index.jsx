import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

export const PieChartBox = ({ title, visible, forwardedRef }) => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

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
    <Styled.compStyle ref={forwardedRef}>
      <h3>{title}</h3>

      {visible && (
        <div>
          <ResponsiveContainer width="99%" height={400}>
            <PieChart width={400} height={400}>
              <Pie
                isAnimationActive={true}
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </Styled.compStyle>
  );
};

PieChartBox.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  forwardedRef: PropTypes.object,
};
