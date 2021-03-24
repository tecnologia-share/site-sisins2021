import { Container, Text, LottieWrapper } from './styles';
import Lottie from 'react-lottie';
import WaitingWithACupCoffee from '../../assets/lotties/waiting-with-a-cup-coffee.json';
import { HTMLAttributes } from 'react';

const EmptyCourses: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Container {...props}>
      <Text>
        Não há cursos disponíveis no momento.
        <br />
        Aguarde pelo próximo processo seletivo.
      </Text>
      <LottieWrapper>
        <Lottie
          isClickToPauseDisabled
          options={{
            loop: true,
            autoplay: true,
            animationData: WaitingWithACupCoffee,
          }}
        />
      </LottieWrapper>
    </Container>
  );
};

export default EmptyCourses;
