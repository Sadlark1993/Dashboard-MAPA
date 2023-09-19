import PropTypes from 'prop-types';
import { ChartBox } from '../../components/chart-box';

import * as Styled from './styles';
import { Dashboard } from '../../components/dashboard';
import agroProduction from '../../data/agroProduction';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DataContext } from '../../context/ProductionValue';
import { SelectionBox } from '../../components/selection-box';
import { PieChartBox } from '../../components/pie-chart-box';
import gdpComposition from '../../data/gdpComposition';
import { LineChartBox } from '../../components/line-chart-box';

export const Production = () => {
  const [pieChartVisible, setPieChartVisible] = useState(false);
  const { agroValue, themeStyle } = useContext(DataContext);
  const chartPieRef = useRef();
  const observer = useRef(
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? setPieChartVisible(true) : '')),
  );

  useEffect(() => {
    document.addEventListener('scrollend', observer.current.observe(chartPieRef.current));
  }, []);

  useEffect(() => {
    if (pieChartVisible) document.removeEventListener('scrollend', () => observer.observe(chartPieRef.current));
  }, [pieChartVisible, observer]);

  //console.log(agroValue);
  return (
    <Styled.compStyle themeStyle={themeStyle}>
      <h1>Produção Agropecuária</h1>
      <Dashboard>
        <SelectionBox />
        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola"
          year={2021}
          value={743327068000}
          data={agroValue}
        />

        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola."
          year={2021}
          value={743327068000}
          data={agroProduction}
        />

        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola."
          year={2021}
          value={743327068000}
          data={agroProduction}
        />

        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola."
          year={2021}
          value={743327068000}
          data={agroProduction}
        />

        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola."
          year={2021}
          value={743327068000}
          data={agroProduction}
        />

        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola."
          year={2021}
          value={743327068000}
          data={agroProduction}
        />

        {useMemo(
          () => (
            <PieChartBox
              forwardedRef={chartPieRef}
              title="Participação no PIB em 2022"
              visible={pieChartVisible}
              data={gdpComposition}
            />
          ),
          [pieChartVisible],
        )}

        <LineChartBox title="Histórico de Produção Agropecuária" />
      </Dashboard>
    </Styled.compStyle>
  );
};

Production.propTypes = {};
