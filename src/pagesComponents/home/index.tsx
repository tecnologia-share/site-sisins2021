import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import boyNotebook from '../../assets/lotties/boy-notebook.json';
import boyTopBook from '../../assets/lotties/boy-on-top-book.json';
import boyWithBook from '../../assets/lotties/boy-with-book.json';
import girlsJumping from '../../assets/lotties/girls-jumping.json';
import {
  Container,
  ContainerIcon,
  FooterCol,
  FooterContainer,
  FooterRow,
  FooterText,
  Icon,
  LottieWrapper,
  RowButton,
  RowLottie,
  RowTextContainer,
  RowTextItem,
  RowTitle,
} from './styles';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <RowLottie containsButton={true}>
          <LottieWrapper>
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: boyWithBook,
              }}
            />
          </LottieWrapper>
          <RowTitle>Share aqui compartilhamos ideias</RowTitle>
          <RowTextContainer>
            <RowTextItem>
              Seja bem-vindo ao site da Associação Share!
            </RowTextItem>
            <RowTextItem>
              A Share é uma Entidade Estudantil fundada em 2016 por alunos de
              Ciências Econômicas na UFSCar - Campus Sorocaba, com o intuito de
              conectar o desejo de ensinar com a vontade de aprender. Para isso
              oferecemos semestralmente cursos de idioma, culturais e
              administrativos,
            </RowTextItem>
          </RowTextContainer>
          <RowButton>Saiba mais</RowButton>
        </RowLottie>
        <RowLottie lottieRight={true} containsButton={true}>
          <LottieWrapper>
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: girlsJumping,
              }}
            />
          </LottieWrapper>
          <RowTitle>Fique atento aos nossos processos seletivos</RowTitle>
          <RowTextContainer>
            <RowTextItem>
              Processo seletivo estudantes 2021/1<br></br>
              Confira aqui informações sobre o processo seletivo.
            </RowTextItem>
          </RowTextContainer>
          <RowButton>Saiba mais</RowButton>
        </RowLottie>
        <RowLottie>
          <LottieWrapper>
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: boyNotebook,
              }}
            />
          </LottieWrapper>
          <RowTitle>Nossa missão</RowTitle>
          <RowTextContainer>
            <RowTextItem>
              Visamos a construção do conhecimento nas mais diversas áreas:
              idiomas, cultura e até softwares. Tudo isso de forma íntegra e
              gratuita, preservando, assim, tanto o ensinar quanto o aprender.
            </RowTextItem>
            <RowTextItem>
              No primeiro semestre de 2020 mais de 3.900 pessoas tanto no Brasil
              quanto no exterior se inscreveram em cursos da Share Oferecemos 18
              cursos e ofertamos 370 vagas Fomos destaque no G1 Notícias, Site
              da UFSCar Sorocaba, Rádio Jornal Cruzeiro do Sul e TV
              Sorocaba(SBT)
            </RowTextItem>
          </RowTextContainer>
        </RowLottie>
        <RowLottie lottieRight={true}>
          <LottieWrapper>
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: boyTopBook,
              }}
            />
          </LottieWrapper>
          <RowTitle>
            "Conectar o desejo de ensinar com a vontade de aprender"
          </RowTitle>
          <RowTextContainer>
            <RowTextItem>
              "Fazer o curso de oratória na share, para mim, foi incrível! Além
              de ter a oportunidade de conhecer pessoas de outros cursos e
              pessoas de fora da UFSCar, as aulas me proporcionaram um
              aprendizado muito rico sobre técnicas de apresentação, como se
              portar durante um discurso e como ser claro e coerente ao passar
              uma mensagem verbal. Indico a Share para todos aqueles que tem
              vontade de aprender de uma forma inovadora!"<br></br>
              <b>- Vitória Benevenuto, foi aluna do curso de Oratória</b>
            </RowTextItem>
            <RowTextItem>
              "Eu fiz o curso de espanhol pós intermediário e foi muito bom,
              gostei muito da relação aluno-professor que eu tive com a minha
              professora (tanto que agora ela é minha aluna de alemão). Já sabia
              muito do idioma, mas eu não tinha nenhuma prova ou certificado e
              isso me ajudou muito; quase fui contratada como professora de
              espanhol esse ano, mas por não atender meu horario de
              disponibilidade mesmo que eu não consegui"<br></br>
              <b>
                - Helena do Carmo, foi aluna do curso de Espanhol
                Pós-intermediário
              </b>
            </RowTextItem>
          </RowTextContainer>
        </RowLottie>
      </Container>
      <FooterContainer>
        <FooterRow>
          <FooterCol>
            <ContainerIcon>
              <Icon src="/icons/Instagram.svg" />
            </ContainerIcon>
          </FooterCol>
          <FooterCol>
            <ContainerIcon>
              <Icon src="/icons/Facebook.svg" />
            </ContainerIcon>
          </FooterCol>
          <FooterCol>
            <ContainerIcon>
              <Icon src="/icons/Linkedin.svg" />
            </ContainerIcon>
          </FooterCol>
        </FooterRow>
        <FooterRow>
          <FooterCol>
            <FooterText>Animações by LottieFiles</FooterText>
          </FooterCol>
        </FooterRow>
        <FooterRow>
          <FooterCol>
            <FooterText>Ilustrações by Undraw</FooterText>
          </FooterCol>
        </FooterRow>
        <FooterRow>
          <FooterCol>
            <FooterText>© Share. Todos os direitos reservados.</FooterText>
          </FooterCol>
        </FooterRow>
      </FooterContainer>
    </>
  );
};

export default Home;
