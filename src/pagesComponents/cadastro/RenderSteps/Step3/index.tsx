import { Form } from '@unform/web';
import AnimationRegisterStep3 from 'assets/lotties/registerStep3.json';
import Input from 'components/Input';
import RadioButton, { RadioItem } from 'components/RadioButton';
import useApi from 'hooks/useApi';
import { AsksAnswers } from 'hooks/useApi/types';
import { useRouter } from 'next/router';
import { CadastroLayout } from 'pagesComponents/cadastro/components/CadastroLayout';
import React, { useCallback, useContext, useRef, useState } from 'react';
import * as yup from 'yup';
import Button from '../../../../components/Button';
import { CadastroContext } from '../../CadastroContext';
import * as S from './styles';

interface Step3Data {
  asksAnswers: string[];
}

export const Step3 = () => {
  const router = useRouter();
  const { apiRegister } = useApi();
  const { step, cadastroData, asks } = useContext(CadastroContext);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data: Step3Data) => {
      formRef.current.setErrors({});

      const schema = yup.object().shape({
        asksAnswers: yup
          .array()
          .of(
            yup.string().required('É obrigatório responder todas as perguntas.')
          ),
      });

      try {
        await schema.validate(data, { abortEarly: false });
      } catch (error) {
        const validationErrors = {};

        if (error instanceof yup.ValidationError) {
          error.inner.forEach((currentError) => {
            validationErrors[currentError.path] = currentError.message;
          });
          formRef.current.setErrors(validationErrors);
        }
        return;
      }

      const asksForRegister: AsksAnswers[] = data.asksAnswers.map(
        (answer, index) => ({
          asksId: asks[index].id,
          response: answer,
        })
      );

      setLoading(true);

      try {
        await apiRegister({
          ...cadastroData,
          asksAnswers: asksForRegister,
        });

        return router.push('/cadastro/finalizado');
      } catch (error) {
        setLoading(false);
        /** @TODO Tratar erro apiRegister */
      }
    },
    [apiRegister, asks, cadastroData, router]
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
                    name={`asksAnswers[${index}]`}
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
                    name={`asksAnswers[${index}]`}
                    style={{ marginBottom: '3rem' }}
                  ></Input>
                </React.Fragment>
              );
            }
          })}

          <Button disabled={loading}>Continuar cadastro</Button>
        </Form>
      </S.FormContainer>
    </CadastroLayout>
  );
};
