import { useState } from 'react';
import { Factorial } from './components/Factorial';
import { Header } from './components/Header';
import GlobalStyle from './global';

function App() {
  const [inputFactorial, setInputFactorial] = useState(0);
  return (
    <>
      <Header setInputFactorial={setInputFactorial} />
      <Factorial value={inputFactorial} />
      <GlobalStyle />
    </>
  );
}

export default App;
