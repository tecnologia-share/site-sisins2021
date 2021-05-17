import Lottie from 'react-lottie';

import Button from '../components/Button';

import WaitingWithACupCoffee from '../assets/lotties/waiting-with-a-cup-coffee.json';

import { LottieWrapper, Container, Title, Text } from '../styles/home/styles';

const Home = () => {
  return (
    <Container>
      <Title>Aqui na Share nós compartilhamos ideias</Title>

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

      <Text>
        Seja bem-vindo ao site da Associação Share!
        <br />
        <br />A Share é uma Entidade Estudantil fundada em 2016 por alunos de
        Ciências Econômicas na UFSCar - Campus Sorocaba, com o intuito de
        conectar o desejo de ensinar com a vontade de aprender. Para isso
        oferecemos semestralmente cursos de idioma, culturais e administrativos.
      </Text>

      <Button size="small" type="button">
        Saiba mais
      </Button>
    </Container>
  );
};

export default Home;
