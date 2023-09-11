import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/Global-Styles';
import { Header } from './components/header';
import { SideMenu } from './components/side-menu';
import sideLinks from './data/sideLinks';
import links from './data/links';
import { Production } from './pages/production';
import * as Styled from './styles';
import { ProductionValue } from './context/ProductionValue';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <ProductionValue>
      <BrowserRouter>
        <GlobalStyles />
        <Header links={links} />
        <Styled.compStyle>
          <SideMenu sideLinks={sideLinks} />
          <Routes>
            <Route path="/" element={<Production />} />
            <Route path="/verbas" element={<p>verbas</p>} />
          </Routes>
        </Styled.compStyle>
      </BrowserRouter>
    </ProductionValue>
  </ThemeProvider>,
);
