import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import { useRandomStore } from '@/modules/quotable';
import './style.css';

function App() {
  const isFetched = useRef<boolean>(false);
  const randomStore = useRandomStore((state) => state);

  useEffect(() => {
    if (!isFetched.current) {
      isFetched.current = true;

      randomStore.getRandom().catch(console.error);
    }
  }, [randomStore]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ maxWidth: '80vw' }}>
          <p>
            {randomStore.content || 'Wait'}
            <br />
            <br />
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>&nbsp;</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
