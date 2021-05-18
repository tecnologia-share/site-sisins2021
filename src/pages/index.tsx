import Lottie from 'react-lottie';

import Button from '../components/Button';

import WaitingWithACupCoffee from '../assets/lotties/waiting-with-a-cup-coffee.json';

import {
  LottieWrapper,
  Container,
  Title,
  Text,
  Footer,
  Feather,
  FeatherContainer,
  Vector,
} from '../styles/home/styles';
import React from 'react';

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
      <Button size="small" type="button" color="green">
        Saiba mais
      </Button>
      <Title>Fique atento aos nossos processos seletivos</Title>
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
        Processo seletivo estudantes 2021/1.
        <br />
        Confira aqui informações sobre o processo seletivo.
      </Text>
      <Button size="small" type="button" color="green">
        Saiba mais
      </Button>
      <Title>Nossa missão</Title>
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
        Visamos a construção do conhecimento nas mais diversas áreas: idiomas,
        cultura e até softwares. Tudo isso de forma íntegra e gratuita,
        preservando, assim, tanto o ensinar quanto o aprender. <br /> <br />
        No primeiro semestre de 2020 mais de 3.900 pessoas tanto no Brasil
        quanto no exterior se inscreveram em cursos da Share. <br />
        Oferecemos 18 cursos e ofertamos 370 vagas. <br />
        Fomos destaque no G1 Notícias, Site da UFSCar Sorocaba, Rádio Jornal
        Cruzeiro do Sul e TV Sorocaba(SBT)
      </Text>
      <br />
      <br />
      <br />
      <br />
      <Title>"Conectar o desejo de ensinar com a vontade de aprender"</Title>
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
      <br />
      <br />
      <Text>
        "Fazer o curso de oratória na share, para mim, foi incrível! Além de ter
        a oportunidade de conhecer pessoas de outros cursos e pessoas de fora da
        UFSCar, as aulas me proporcionaram um aprendizado muito rico sobre
        técnicas de apresentação, como se portar durante um discurso e como ser
        claro e coerente ao passar uma mensagem verbal. Indico a Share para
        todos aqueles que tem vontade de aprender de forma inovadora!"
      </Text>
      <br />
      <Title> - Vitória Benevenuto - curso de Oratória</Title>
      <br />
      <br />
      <Text>
        "Eu fiz o curso de espanhol pós intermediário e foi muito bom, gostei
        muito da relação aluno-professor que eu tive com a minha professora
        (tanto que agora ela é minha aluna de alemão). Já sabia muito do idioma,
        mas eu não tinha nenhuma prova ou certificado e isso me ajudou muito:
        quase fui contratada como professora de espanhol esse ano, mas por não
        atender meu horário de disponibilidade mesmo que eu não consegui"
      </Text>
      <br />
      <Title>
        - Helena do Carmo - curso de Espanhol Pós-&#65279;intermediário
      </Title>
      <Footer>
        <FeatherContainer>
          <Feather>
            <Vector src={'icons/instagram.svg'} />{' '}
          </Feather>
          <Feather>
            <Vector src={'icons/facebook.svg'} />
          </Feather>
          <Feather>
            <Vector src={'icons/linkedin.svg'} />
          </Feather>
        </FeatherContainer>
        Animações por LottieFiles <br /> © Share. Todos os direitos reservados.
      </Footer>
    </Container>
  );
};

export default Home;
