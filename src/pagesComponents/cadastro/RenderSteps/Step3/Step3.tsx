import { Form } from '@unform/web';
import AnimationRegisterStep3 from 'assets/lotties/registerStep3.json';
import Input from 'components/Input';
import RadioButton from 'components/RadioButton';
import { CadastroLayout } from 'pagesComponents/cadastro/components/CadastroLayout';
import { useCallback, useContext, useRef } from 'react';
import Button from '../../../../components/Button';
import { CadastroContext } from '../../CadastroContext';
import * as S from './styles';

interface Oi {
  firstQuestion: string;
  secondQuestion: string;
  answer: string;
}

export const Step3 = () => {
  const { step, setCadastroData, cadastroData, asks } = useContext(
    CadastroContext
  );

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      console.log(data);
      // formRef.current.setErrors({});

      // const schema = yup.object().shape({
      //   firstQuestion: yup.string().required('A resposta é obrigatória.'),
      //   secondQuestion: yup.string().required('A resposta é obrigatória.'),
      //   answer: yup.string().required('A resposta é obrigatória.'),
      // });

      // try {
      //   await schema.validate(
      //     {
      //       firstQuestion,
      //       secondQuestion,
      //       answer,
      //     },
      //     { abortEarly: false }
      //   );
      // } catch (error) {
      //   const validationErrors = {};

      //   if (error instanceof yup.ValidationError) {
      //     error.inner.forEach((currentError) => {
      //       validationErrors[currentError.path] = currentError.message;
      //     });
      //     formRef.current.setErrors(validationErrors);
      //   }
      //   return;
      // }
      // setCadastroData((previousData) => ({
      //   ...previousData,
      //   ...{
      //     firstQuestion,
      //     secondQuestion,
      //     answer,
      //   },
      // }));
    },
    [setCadastroData]
  );

  return (
    <CadastroLayout
      step={step}
      title="Questionário"
      subtitle="Responda a esse pequeno questionário para sabermos mais sobre você."
      footer={{
        icon: '/icons/Badge.svg',
        title: 'Sobre nós',
        subtitle: 'A Share é uma Entidade Estudantil fundada em 2016',
        animation: AnimationRegisterStep3,
      }}
    >
      <S.FormContainer>
        <Form
          initialData={cadastroData}
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ width: '100%' }}
        >
          <S.Questions>Como você conheceu a share?</S.Questions>

          <RadioButton
            name="question[0]"
            style={{ marginBottom: '1rem' }}
            items={[
              {
                label: 'Amigos',
                value: '1',
              },
              {
                label: 'Professor',
                value: '2',
              },
              {
                label: 'Outros',
                value: '3',
              },
            ]}
          />

          <S.Questions>Você já fez algum curso da share?</S.Questions>

          <RadioButton
            name="question[1]"
            style={{ marginBottom: '1rem' }}
            items={[
              {
                label: 'Sim',
                value: '1',
              },
              {
                label: 'Não',
                value: '2',
              },
            ]}
          />

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
