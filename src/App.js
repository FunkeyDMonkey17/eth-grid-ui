import React from 'react';
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';

// Set up chains and providers
const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Gridly',
  projectId: 'gridly-test-walletconnect', // this can be any string for now
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
          <h1>Welcome to Gridly 🔥</h1>
          <p>Automate your DeFi grid trading experience.</p>

          {/* Wallet Connect Button */}
          <ConnectButton />

          <div style={{ marginTop: '3rem' }}>
            <button
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Launch Bot
            </button>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
