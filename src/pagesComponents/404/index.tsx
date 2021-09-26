import { Container, Title, Text, LottieWrapper } from './styles';
import Lottie from 'react-lottie';
import Error404Glitch from '../../assets/lotties/404-error-glitch.json';

const NotFound = () => {
  return (
    <Container>
      <Text>OPS...</Text>
      <Title>Página não encontrada :(</Title>
      <LottieWrapper>
        <Lottie
          isClickToPauseDisabled
          options={{
            loop: true,
            autoplay: true,
            animationData: Error404Glitch,
          }}
        />
      </LottieWrapper>
    </Container>
  );
};

export default NotFound;
