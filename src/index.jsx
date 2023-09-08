import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/Global-Styles';
import { Header } from './components/header';
import { SideMenu } from './components/side-menu';
import sideLinks from './data/sideLinks';
import links from './data/links';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <Header links={links} />
      <div style={{ display: 'flex' }}>
        <SideMenu sideLinks={sideLinks} />
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/verbas" element={<p>verbas</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  </ThemeProvider>,
);
