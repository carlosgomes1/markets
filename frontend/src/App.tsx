import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { AuthProvider } from './Context/AuthContext';

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
