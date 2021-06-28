import { useContext } from 'react';
import { CadastroContext } from '../../CadastroContext';
import { Container, Title } from './styles';

export const Step3 = () => {
  const { previousStep, step } = useContext(CadastroContext);

  const handleBack = () => {
    previousStep();
  };

  const handleContinue = () => {
    alert('Você completou o cadastro!');
  };

  return (
    <Container>
      <Title>Step {step}</Title>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleContinue}>Continue</button>
    </Container>
  );
};
