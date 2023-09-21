import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const ProductionValue = ({ children }) => {
  const switchTheme = () => {
    setThemeStyle((c) => ({ darkTheme: !c.darkTheme, switchTheme }));
    console.log('theme switched');
  };

  const [agroValue, setAgroValue] = useState([{ 2000: 1 }]);
  const [soyAmount, setSoyAmount] = useState([{ 2000: 1 }]);
  const [cattleAmount, setCattleAmount] = useState([{ 2000: 1 }]);
  const [themeStyle, setThemeStyle] = useState({ darkTheme: true, switchTheme });

  useEffect(() => {
    (async () => {
      //agroValue
      const agroValuePromise = await fetch(
        'https://servicodados.ibge.gov.br/api/v3/agregados/5457/periodos/2017%7C2018%7C2019%7C2020%7C2021/variaveis/215?localidades=N1[all]&classificacao=782[0]',
      );
      const agroValueObj = await agroValuePromise.json();
      const chartArray = formatData(agroValueObj[0].resultados[0].series[0].serie);
      setAgroValue(chartArray);
    })();

    //soyAmount
    (async () => {
      const soyAmountPromise = await fetch(
        'https://servicodados.ibge.gov.br/api/v3/agregados/5457/periodos/2017|2018|2019|2020|2021|2022/variaveis/214?localidades=N1[all]&classificacao=782[40124]',
      );
      const soyAmountObj = await soyAmountPromise.json();
      const chartArray = formatData(soyAmountObj[0].resultados[0].series[0].serie);
      setSoyAmount(chartArray);
    })();

    //cattleAmount
    (async () => {
      const cattleAmountPromise = await fetch(
        'https://servicodados.ibge.gov.br/api/v3/agregados/1092/periodos/202001|202002|202003|202004|202101|202102|202103|202104|202201|202202|202203|202204|202301|202302/variaveis/285?localidades=N1[all]&classificacao=12716[115236]|18[992]|12529[118225]',
      );
      const cattleAmountObj = await cattleAmountPromise.json();
      const quarterly = formatData(cattleAmountObj[0].resultados[0].series[0].serie);

      const yearly = [];
      let counter = 0;
      let aux = 0;
      for (const item in quarterly) {
        counter++;
        aux += +quarterly[item].valor;
        if (counter >= 3) {
          counter = 0;
          yearly.push({ name: quarterly[item].name.slice(0, 4), valor: aux });
          aux = 0;
        }
      }

      setCattleAmount(yearly);
    })();
  }, []);

  return (
    <DataContext.Provider value={{ agroValue, soyAmount, cattleAmount, themeStyle }}>{children}</DataContext.Provider>
  );
};

ProductionValue.propTypes = {
  children: PropTypes.node.isRequired,
};

const formatData = (obj) => {
  const chartArray = [];
  for (const key in obj) {
    chartArray.push({ name: key, valor: obj[key] });
  }
  //console.log(chartArray);
  return chartArray;
};

/* //content of the object from the API:
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
