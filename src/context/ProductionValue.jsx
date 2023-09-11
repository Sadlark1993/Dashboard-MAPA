import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const ProductionValue = ({ children }) => {
  const [agroValue, setAgroValue] = useState({});

  useEffect(() => {
    (async () => {
      const agroValuePromise = await fetch(
        'https://servicodados.ibge.gov.br/api/v3/agregados/5457/periodos/2017%7C2018%7C2019%7C2020%7C2021/variaveis/215?localidades=N1[all]&classificacao=782[0]',
      );
      const agroValueObj = await agroValuePromise.json();
      console.log(agroValueObj[0].resultados[0].series[0].serie);
      setAgroValue(agroValueObj[0].resultados[0].series[0].serie);
    })();
  }, []);

  return <DataContext.Provider value={{ agroValue }}>{children}</DataContext.Provider>;
};

ProductionValue.propTypes = {
  children: PropTypes.node.isRequired,
};

/*
  [
    {
      "id": "215",
      "variavel": "Valor da produção",
      "unidade": "Mil Reais",
      "resultados": [
        {
          "classificacoes": [
            {
              "id": "782",
              "nome": "Produto das lavouras temporárias e permanentes",
              "categoria": {
                "0": "Total"
              }
            }
          ],
          "series": [
            {
              "localidade": {
                "id": "1",
                "nivel": {
                  "id": "N1",
                  "nome": "Brasil"
                },
                "nome": "Brasil"
              },
              "serie": {
                "2017": "317145098",
                "2018": "343457000",
                "2019": "360793898",
                "2020": "468536460",
                "2021": "743327068"
              }
            }
          ]
        }
      ]
    }
  ] 
*/