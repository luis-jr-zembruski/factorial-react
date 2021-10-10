import React, { useState } from 'react';
import './App.css';
import { Factorial } from './components/Factorial';
import { Header } from './components/Header';

function App() {
  const [inputFactorial, setInputFactorial] = useState(0);
  return (
    <div className="App">
      <Header setInputFactorial={setInputFactorial} />
      <Factorial value={inputFactorial} />
    </div>
  );
}

export default App;
