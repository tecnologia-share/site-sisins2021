import { Form } from '@unform/web';
import AnimationRegisterStep3 from 'assets/lotties/registerStep3.json';
import Input from 'components/Input';
import RadioButton, { RadioItem } from 'components/RadioButton';
import { CadastroLayout } from 'pagesComponents/cadastro/components/CadastroLayout';
import React, { useCallback, useContext, useRef } from 'react';
import Button from '../../../../components/Button';
import { CadastroContext } from '../../CadastroContext';
import * as S from './styles';

export const Step3 = () => {
  const { step, cadastroData, asks } = useContext(CadastroContext);

  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
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
  }, []);

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
          {asks.map((ask, index) => {
            if (ask.type === 'ALTERNATIVE') {
              const alternatives: RadioItem[] = [];

              if (ask.alternatives.one) {
                alternatives.push({ label: ask.alternatives.one, value: '1' });
              }
              if (ask.alternatives.two) {
                alternatives.push({ label: ask.alternatives.two, value: '2' });
              }
              if (ask.alternatives.tree) {
                alternatives.push({ label: ask.alternatives.tree, value: '3' });
              }
              if (ask.alternatives.four) {
                alternatives.push({ label: ask.alternatives.four, value: '4' });
              }
              if (ask.alternatives.five) {
                alternatives.push({ label: ask.alternatives.five, value: '5' });
              }

              return (
                <React.Fragment key={ask.id}>
                  <S.QuestionTitle>{ask.ask}</S.QuestionTitle>

                  <RadioButton
                    name={`asksAnswers[${index}].response`}
                    style={{ marginBottom: '1rem' }}
                    items={alternatives}
                  />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={ask.id}>
                  <S.QuestionTitle>{ask.ask}</S.QuestionTitle>

                  <Input
                    placeholder="Resposta"
                    name={`asksAnswers[${index}].response`}
                    style={{ marginBottom: '3rem' }}
                  ></Input>
                </React.Fragment>
              );
            }
          })}

          <Button>Continuar cadastro</Button>
        </Form>
      </S.FormContainer>
    </CadastroLayout>
  );
};
