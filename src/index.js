import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Import web3sdkio provider and Goerli ChainId
import { Web3sdkioProvider } from '@web3sdkio/react';
import { ChainId } from '@web3sdkio/sdk';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

// Wrap your app with the web3sdkio provider
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <App />
    </Web3sdkioProvider>
  </React.StrictMode>,
);
