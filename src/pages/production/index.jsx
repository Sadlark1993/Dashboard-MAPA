import PropTypes from 'prop-types';
import { ChartBox } from '../../components/chart-box';

import * as Styled from './styles';
import { Dashboard } from '../../components/dashboard';
import agroProduction from '../../data/agroProduction';
import { useContext } from 'react';
import { DataContext } from '../../context/ProductionValue';

export const Production = () => {
  const { agroValue } = useContext(DataContext);

  //console.log(agroValue);
  return (
    <Styled.compStyle>
      <h1>Produção Agropecuária</h1>
      <Dashboard>
        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola"
          year={2021}
          value={743327068000}
          data={agroValue}
        />
        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola"
          year={2021}
          value={743327068000}
          data={agroProduction}
        />
        <ChartBox
          imgSrc="./dist/img/tractor-green.svg"
          title="Valor da Produção Agrícola"
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
      </Dashboard>
    </Styled.compStyle>
  );
};

Production.propTypes = {};
