import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useRef } from 'react';

export const SelectionBox = () => {
  const levelRef = useRef();

  return (
    <Styled.compStyle>
      <h4>Configurar Indicadores</h4>
      <Styled.selectionContent>
        <Styled.inputBlock>
          <label>nível de localização</label>
          <select ref={levelRef}>
            <option value={0}>país</option>
            <option value={1}>Estado</option>
            <option value={3}>município</option>
          </select>
        </Styled.inputBlock>
        <Styled.inputBlock>
          <label>localização</label>
          <select ref={levelRef}>
            <option value={0}>Brasil</option>
            <option value={1}>Mato Grosso</option>
            <option value={3}>Cuiabá</option>
          </select>
        </Styled.inputBlock>
        <Styled.inputBlock>
          <label>ano</label>
          <select ref={levelRef}>
            <option value={0}>2022</option>
            <option value={1}>2021</option>
            <option value={3}>2020</option>
          </select>
        </Styled.inputBlock>
      </Styled.selectionContent>
    </Styled.compStyle>
  );
};

SelectionBox.propTypes = {};
