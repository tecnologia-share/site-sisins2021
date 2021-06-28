import { useContext } from 'react';
import { CadastroContext } from '../CadastroContext';
import { Step1 } from './Step1/Step1';
import { Step2 } from './Step2/Step2';
import { Step3 } from './Step3/Step3';

export const RenderSteps = () => {
  const { step } = useContext(CadastroContext);

  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    default:
      return <Step3 />;
  }
};
