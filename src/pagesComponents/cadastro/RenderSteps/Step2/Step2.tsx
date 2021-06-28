import { useContext } from 'react';
import { CadastroContext } from '../../CadastroContext';
import { Container, Title } from './styles';

export const Step2 = () => {
  const { previousStep, nextStep, step } = useContext(CadastroContext);

  const handleBack = () => {
    previousStep();
  };

  const handleContinue = () => {
    nextStep();
  };

  return (
    <Container>
      <Title>Step {step}</Title>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleContinue}>Continue</button>
    </Container>
  );
};
