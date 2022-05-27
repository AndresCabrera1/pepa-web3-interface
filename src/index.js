import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibraryW3 } from './config/web3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider>
        <Web3ReactProvider getLibrary={getLibraryW3}>
          <App />
        </Web3ReactProvider>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);
