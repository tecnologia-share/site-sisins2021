import { Form } from '@unform/web';
import AnimationRegisterStep1 from 'assets/lotties/registerStep1.json';
import { CadastroLayout } from 'pagesComponents/cadastro/components/CadastroLayout';
import { useCallback, useContext, useRef } from 'react';
import * as yup from 'yup';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import InputPassword from '../../../../components/InputPassword';
import { CadastroContext, CadastroData } from '../../CadastroContext';
import * as S from './styles';

interface Step1Data extends CadastroData {
  confirmPassword: string;
}

export const Step1 = () => {
  const { nextStep, step, setCadastroData, cadastroData } = useContext(
    CadastroContext
  );
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data: Step1Data) => {
      formRef.current.setErrors({});

      const isValidDate = (value: string) => {
        return /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(value);
      };

      const schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório.'),
        birth_date: yup
          .string()
          .test({
            test: isValidDate,
            message: 'Data de nascimento deve ser uma data válida.',
          })
          .required('Data de nascimento é obrigatória.'),
        email: yup
          .string()
          .email('Email deve ser um email válido.')
          .required('Email é obrigatório.'),
        password: yup.string().required('Senha é obrigatória.'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'As senhas devem ser iguais.')
          .required('Senha é obrigatória'),
        cpf: yup.string().required('CPF é obrigatório.'),
        phone: yup.string().required('Celular é obrigatório.'),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });
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

      setCadastroData((previousData) => ({ ...previousData, ...data }));
      nextStep();
    },
    [nextStep, setCadastroData]
  );

  return (
    <CadastroLayout
      step={step}
      title="Cadastro"
      subtitle="Olá, vamos começar seu cadastro."
      footer={{
        icon: '/icons/PaymentHand.svg',
        title: 'Valor',
        subtitle: 'A taxa de matrícula é de apenas R$5,00 reais.',
        animation: AnimationRegisterStep1,
      }}
    >
      <S.FormContainer>
        <Form
          initialData={cadastroData}
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ width: '100%' }}
        >
          <Input
            label="Nome completo"
            placeholder="Nome Completo"
            name="name"
            style={{ marginBottom: '3rem' }}
          />
          <Input
            label="Data de nascimento"
            placeholder="yyyy-mm-dd"
            name="birth_date"
            type="date"
            style={{ marginBottom: '3rem' }}
          />
          <Input
            label="E-mail"
            placeholder="E-mail"
            name="email"
            style={{ marginBottom: '3rem' }}
          />
          <InputPassword
            label="Senha"
            placeholder="Senha"
            name="password"
            style={{ marginBottom: '3rem' }}
          />
          <InputPassword
            label="Confirmar senha"
            placeholder="Confirmar senha"
            name="confirmPassword"
            style={{ marginBottom: '3rem' }}
          />
          <Input
            label="CPF"
            placeholder="CPF"
            name="cpf"
            style={{ marginBottom: '3rem' }}
          />
          <Input
            label="Celular (DDD+número) - (whatsapp)"
            placeholder="5511998989898"
            name="phone"
            type="tel"
            pattern="\d+"
            title="Digite somente números"
            style={{ marginBottom: '3rem' }}
          />

          <Button>Continuar cadastro</Button>
        </Form>
      </S.FormContainer>
    </CadastroLayout>
  );
};
