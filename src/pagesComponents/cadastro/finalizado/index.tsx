import Lottie from 'react-lottie';
import SendEmail from '../../../assets/lotties/send-email.json';
import {
  Container, DescriptionSendEmail, LottieWrapper, TitleSendEmail
} from './styles';

const Finalizado = () => {
  return (
    <Container>
      <LottieWrapper>
        <Lottie
          isClickToPauseDisabled
          options={{
            loop: true,
            autoplay: true,
            animationData: SendEmail,
          }}
        />
      </LottieWrapper>
      <TitleSendEmail>Quase lá!.</TitleSendEmail>
      <DescriptionSendEmail>
        Enviamos um link de confirmação de cadastro para seu e-mail, basta
        clicar nele para validar seu cadastro.
      </DescriptionSendEmail>
    </Container>
  );
};

export default Finalizado;
