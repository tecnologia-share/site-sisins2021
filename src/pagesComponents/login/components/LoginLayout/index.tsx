import { Form } from '@unform/web';
import { AuthContext } from 'pagesComponents/login/AuthContext';
import { useCallback, useContext, useRef } from 'react';
import Lottie from 'react-lottie';
import * as yup from 'yup';
import LoginAnimation from '../../../../assets/lotties/login.json';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import InputPassword from '../../../../components/InputPassword';
import * as S from './styles';

type LoginData = {
  email: string;
  password: string;
};

export const LoginLayout = () => {
  const formRef = useRef(null);
  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: LoginData) => {
      formRef.current.setErrors({});

      const schema = yup.object().shape({
        email: yup
          .string()
          .email('Email deve ser um email válido.')
          .required('Email é obrigatório.'),
        password: yup.string().required('Senha é obrigatória.'),
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

      await signIn(data);
    },
    [signIn]
  );
  return (
    <S.Container>
      <S.FormSection>
        <S.FormSectionContent>
          <S.FormContainer>
            <S.Title>Login</S.Title>
            <Form
              initialData={{}}
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ width: '100%' }}
            >
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
              <Button>Entrar</Button>
            </Form>
          </S.FormContainer>
        </S.FormSectionContent>
      </S.FormSection>
      <S.FooterSection>
        <S.LottieWrapper>
          <Lottie
            isClickToPauseDisabled
            options={{
              loop: true,
              autoplay: true,
              animationData: LoginAnimation,
            }}
          />
        </S.LottieWrapper>
      </S.FooterSection>
    </S.Container>
  );
};
