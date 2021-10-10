import { useState } from "react";
import { Container } from "./style";

interface HeaderProps {
  setInputFactorial: Function;
}

export function Header({ setInputFactorial }: HeaderProps) {
  const [inputValue, setInputValue] = useState(0);

  function setInput(e: number) {
    setInputValue(e);
  }

  function setFactorial() {
    setInputFactorial(inputValue)
  }
  return (
    <Container>
      <h1>Cálculo Fatorial</h1>
      <div>
        <input
          type="text"
          onChange={e => setInput(Number(e.target.value))}
        />
        <button
          type="button"
          onClick={setFactorial}
        >Calcular</button>
      </div>
    </Container>
  );
}