import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface CadastroContextProps {
  nextStep: () => void;
  previousStep: () => void;
  step: number;
  cadastroData: CadastroData;
  setCadastroData: Dispatch<SetStateAction<CadastroData>>;
}

export const CadastroContext = createContext({} as CadastroContextProps);

const TOTAL_STEPS = 3;

export interface CadastroData {
  // Step 1 - Dados pessoais
  name: string;
  birth_date: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;

  // Step 2 - Endereço
  country: string;
  state: string;
  city: string;

  // Step 3 - Perguntas
  asksAnswers: Array<{
    asksId: string;
    response: string;
  }>;
}

export const CadastroContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [cadastroData, setCadastroData] = useState({} as CadastroData);

  const nextStep = () => {
    const newStep = step + 1;

    if (newStep <= TOTAL_STEPS) {
      setStep(newStep);
    }
  };

  const previousStep = () => {
    if (step === 0) return;

    setStep(step - 1);
  };

  return (
    <CadastroContext.Provider
      value={{ nextStep, previousStep, step, cadastroData, setCadastroData }}
    >
      {children}
    </CadastroContext.Provider>
  );
};