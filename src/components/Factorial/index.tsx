import { Container } from "./style";

interface FactorialProps {
  value: number;
}

export function Factorial({ value }: FactorialProps) {
  let result = value;

  while (value > 1) {
    result = result * (value - 1);
    value--;
  }

  return (
    <Container>
      <p>{result}</p>
    </Container>
  );
}