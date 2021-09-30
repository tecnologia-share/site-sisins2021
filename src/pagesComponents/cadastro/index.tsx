import { CadastroContextProvider } from './CadastroContext';
import { RenderSteps } from './RenderSteps';

const Cadastro = () => {
  return (
    <CadastroContextProvider>
      <RenderSteps />
    </CadastroContextProvider>
  );
};

export default Cadastro;
