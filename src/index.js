import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';

import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    accent: '#CD7F32',
    orange: '#DAA520',
    black: '#000000',
    lightOrange: '#FFDEAD'
  },
  spacing: value => `${value * 4}px`,
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
