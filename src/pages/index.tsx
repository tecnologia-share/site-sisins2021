/* eslint-disable prettier/prettier */
import Lottie from 'react-lottie';

import Button from '../components/Button';

import WaitingWithACupCoffee from '../assets/lotties/waiting-with-a-cup-coffee.json';
import MeninoLendoHome from '../assets/lotties/menino com livro na mao home.json';
import MeninoDigitandoHome from '../assets/lotties/menino digitando no notebook home.json';
import MeninasPulandoHome from '../assets/lotties/meninas pulando home.json';
import X from '../assets/lotties/waiting-with-a-cup-coffee.json';

import {
  LottieWrapper,
  Container,
  LeftContainer,
  RightContainer,
  MobileContainer,
  Title,
  TitleBottom,
  Text,
  TextBottom,
  Footer,
  Feather,
  FeatherContainer,
  Vector,
} from '../styles/home/styles';
import React from 'react';

const Home = () => {
  return (
    <>
      <MobileContainer>
        <Title>Share aqui nós compartilhamos ideias</Title>
        <LottieWrapper>
          <Lottie
            isClickToPauseDisabled
            options={{
              loop: true,
              autoplay: true,
              animationData: MeninoLendoHome,
            }}
          />
        </LottieWrapper>
        <Text>
          Seja bem-vindo ao site da Associação Share!
          <br />
          <br />
          <br />A Share é uma Entidade Estudantil fundada em 2016 por alunos de
          Ciências Econômicas na UFSCar - Campus Sorocaba, com o intuito de
          conectar o desejo de ensinar com a vontade de aprender. Para isso
          oferecemos semestralmente cursos de idioma, culturais e
          administrativos.
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
              animationData: MeninasPulandoHome,
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
        <Title>Nossa missão</Title> <br /> <br />
        <LottieWrapper>
          <Lottie
            isClickToPauseDisabled
            options={{
              loop: true,
              autoplay: true,
              animationData: MeninoDigitandoHome,
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
        <TitleBottom>
          &quot;Conectar o desejo de ensinar com a vontade de aprender&quot;
        </TitleBottom>
        <LottieWrapper>
          <Lottie
            isClickToPauseDisabled
            options={{
              loop: true,
              autoplay: true,
              animationData: X,
            }}
          />
        </LottieWrapper>
        <br />
        <br />
        <TextBottom>
          &quot; Fazer o curso de oratória na share, para mim, foi incrível!
          Além de ter a oportunidade de conhecer pessoas de outros cursos e
          pessoas de fora da UFSCar, as aulas me proporcionaram um aprendizado
          muito rico sobre técnicas de apresentação, como se portar durante um
          discurso e como ser claro e coerente ao passar uma mensagem verbal.
          Indico a Share para todos aqueles que tem vontade de aprender de forma
          inovadora! &quot;
        </TextBottom>
        <TitleBottom>- Vitória Benevenuto - curso de Oratória</TitleBottom>
        <br />
        <br />
        <TextBottom>
          &quot; Eu fiz o curso de espanhol pós intermediário e foi muito bom,
          gostei muito da relação aluno-professor que eu tive com a minha
          professora que agora ela é minha aluna de alemão). Já sabia muito do
          idioma, mas eu não tinha nenhuma prova ou certificado e isso me ajudou
          muito: muito: quase fui contratada como professora de espanhol esse
          ano, mas por não atender meu horário de disponibilidade mesmo que eu
          não consegui &quot;
        </TextBottom>
        <TitleBottom>
          - Helena do Carmo - curso de Espanhol Pós-&#65279;intermediário
        </TitleBottom>
      </MobileContainer>
      <Container>
        <RightContainer>
          <Title>Share aqui nós compartilhamos ideias</Title>
          <Text>
            Seja bem-vindo ao site da Associação Share!
            <br />
            <br />
            A Share é uma Entidade Estudantil fundada em 2016 por alunos de
            <br />
            Ciências Econômicas na UFSCar - Campus Sorocaba, com o intuito de
            <br />
            conectar o desejo de ensinar com a vontade de aprender. Para isso
            <br />
            oferecemos semestralmente cursos de idioma, culturais e
            <br />
            administrativos.
            <br />
            <Button size="normal" type="button" color="green">
              Saiba mais
            </Button>
          </Text>
        </RightContainer>
        <LeftContainer>
          <LottieWrapper>
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: MeninoLendoHome,
              }}
            />
          </LottieWrapper>
        </LeftContainer>
      </Container>
      <Container>
        <LeftContainer>
          <Title>
            Fique atento aos nossos processos seletivos
            <br />
          </Title>
          <Text>
            Processo seletivo estudantes 2021/1.
            <br />
            Confira aqui informações sobre o processo seletivo.
            <br />
            <Button size="normal" type="button" color="green">
              Saiba mais
            </Button>
          </Text>
        </LeftContainer>
        <RightContainer>
          <LottieWrapper>
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: MeninasPulandoHome,
              }}
            />
          </LottieWrapper>
        </RightContainer>
      </Container>
      <Container>
        <LeftContainer>
          <LottieWrapper>
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: MeninoDigitandoHome,
              }}
            />
          </LottieWrapper>
        </LeftContainer>
        <RightContainer>
          <Title>Nossa missão</Title>
          <Text>
            Visamos a construção do conhecimento nas mais diversas áreas:
            idiomas, cultura e até
            <br />
            softwares. Tudo isso de forma íntegra e gratuita, preservando,
            assim, tanto o ensinar
            <br />
            quanto o aprender.
            <br />
            <br />
            <br />
            No primeiro semestre de 2020 mais de 3.900 pessoas tanto no Brasil
            quanto no exterior
            <br />
            se inscreveram em cursos da Share.
            <br />
            Oferecemos 18 cursos e ofertamos 370 vagas.
            <br />
            Fomos destaque no G1 Notícias, Site da UFSCar Sorocaba,
            <br />
            Rádio Jornal Cruzeiro do Sul e TV Sorocaba(SBT)
          </Text>
          <br />
        </RightContainer>
      </Container>
      <Container>
        <RightContainer>
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
        </RightContainer>
        <LeftContainer>
          <TitleBottom>
            &quot;Conectar o desejo de ensinar com a vontade de aprender&quot;
          </TitleBottom>
          <TextBottom>
            &quot;Fazer o curso de oratória na share, para mim, foi incrível!
            Além de ter a oportunidade de
            <br />
            conhecer pessoas de outros cursos e pessoas de fora da UFSCar, as
            aulas me
            <br />
            proporcionaram um aprendizado muito rico sobre técnicas de
            apresentação, como se
            <br />
            portar durante um discurso e como ser claro e coerente ao passar uma
            mensagem verbal.
            <br />
            Indico a Share para todos aqueles que tem vontade de aprender de
            forma
            <br />
            inovadora!&quot;
          </TextBottom>
          <TitleBottom>- Vitória Benevenuto, curso de Oratória</TitleBottom>
          <TextBottom>
            &quot;Eu fiz o curso de espanhol pós intermediário e foi muito bom,
            gostei muito da relação
            <br />
            aluno-professor que eu tive com a minha professora (tanto que agora
            ela é minha aluna de
            <br />
            alemão). Já sabia muito do idioma, mas eu não tinha nenhuma prova ou
            certificado e isso me
            <br />
            ajudou muito: quase fui contratada como professora de espanhol esse
            ano, mas por não
            <br />
            atender meu horário de disponibilidade mesmo que eu não
            consegui&quot;
          </TextBottom>
          <TitleBottom>
            - Helena do Carmo, curso de Espanhol Pós-&#65279;intermediário
          </TitleBottom>
        </LeftContainer>
      </Container>
      <Footer>
        <FeatherContainer>
          <Feather>
            <Vector src={'icons/instagram.svg'} />
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
    </>
  );
};

export default Home;
