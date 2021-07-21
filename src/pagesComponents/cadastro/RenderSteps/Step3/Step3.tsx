import { Form } from '@unform/web';
import AnimationRegisterStep3 from 'assets/lotties/registerStep3.json';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { CadastroLayout } from 'pagesComponents/cadastro/components/CadastroLayout';
import { useContext, useRef } from 'react';
import Button from '../../../../components/Button';
import { CadastroContext } from '../../CadastroContext';
import * as S from './styles';

export const Step3 = () => {
  const { nextStep, step, setCadastroData, cadastroData } = useContext(
    CadastroContext
  );

  const formRef = useRef(null);

  const handleContinue = () => {
    alert('Você completou o cadastro!');
  };

  return (
    <CadastroLayout
      step={step}
      title="Questionário"
      subtitle="Responda a esse pequeno questionário para sabermos mais sobre você."
      footer={{
        title: 'Sobre nós',
        subtitle: 'A Share é uma Entidade Estudantil fundada em 2016 ',
        animation: AnimationRegisterStep3,
      }}
    >
      <S.FormContainer>
        <Form
          initialData={cadastroData}
          ref={formRef}
          onSubmit={handleContinue}
          style={{ width: '100%' }}
        >
          <S.Questions>Como você conheceu a share?</S.Questions>
          <Checkbox
            name="friends"
            label="Amigos"
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginBottom: '0.5rem',
            }}
          ></Checkbox>
          <Checkbox
            name="professor"
            label="Professor"
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginBottom: '0.5rem',
            }}
          ></Checkbox>
          <Checkbox
            name="others"
            label="Outros"
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginBottom: '1.5rem',
            }}
          ></Checkbox>

          <S.Questions>Você já fez algum curso da share?</S.Questions>
          <Checkbox
            name="yes"
            label="Sim"
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginBottom: '0.5rem',
            }}
          ></Checkbox>
          <Checkbox
            name="no"
            label="Não"
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginBottom: '1.5rem',
            }}
          ></Checkbox>

          <S.Questions>O quê você acha da share?</S.Questions>
          <Input
            placeholder="Resposta"
            name="answer"
            style={{ marginBottom: '3rem' }}
          ></Input>

          <Button>Continuar cadastro</Button>
        </Form>
      </S.FormContainer>
    </CadastroLayout>
  );
};
