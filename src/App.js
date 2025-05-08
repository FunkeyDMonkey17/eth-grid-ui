import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h1 style={{ fontSize: '3rem' }}>Welcome to Gridly 🔥</h1>
        <p style={{ fontSize: '1.2rem' }}>Automate your trades. DeFi made simple.</p>
        <button
          style={{
            marginTop: '1rem',
            padding: '1rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#282c34',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Connect Wallet
        </button>
      </header>

      {/* Features */}
      <section style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2>🔥 Why Gridly?</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Easy-to-use grid trading bot</li>
          <li>✅ Runs on Ethereum with MetaMask</li>
          <li>✅ Built for beginners & pros</li>
        </ul>
      </section>

      {/* CTA */}
      <footer style={{ marginTop: '4rem', textAlign: 'center' }}>
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
      </footer>
    </div>
  );
}

export default App;
