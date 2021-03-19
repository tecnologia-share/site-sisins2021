import { Nav } from '../../components/Nav/index';
import {
  Container,
  Artigo1,
  Artigo2,
  Artigo3,
  Texto1,
  Texto2,
  Texto3,
  Texto4,
  Subtexto1,
  Subtexto2,
  Subtexto3,
  Subtexto4,
  Img,
  Btn,
  Btn2,
  Artigo4,
  SocialMedia,
  Insta,
  Face,
  Linkedin,
  Footer,
  Credits,
} from '../../pages/home/styles';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Container>
        <Artigo1>
          <Img>
            <Image
              src="/imagem.png"
              alt="imagem1"
              width={736}
              height={527}
              layout="intrinsic"
              grid-area="img"
            />
          </Img>
          <Texto1>Share aqui compartilhamos ideias</Texto1>
          <Subtexto1>
            Seja bem-vindo ao site da Associação Share!
            <br />
            <br />A Share é uma Entidade Estudantil fundada em 2016 por alunos
            de Ciências Econômicas na UFSCar - Campus Sorocaba, com o intuito de
            conectar o desejo de ensinar com a vontade de aprender. Para isso
            oferecemos semestralmente cursos de idioma, culturais e
            administrativos.
          </Subtexto1>
          <Btn>Saiba mais</Btn>
        </Artigo1>
        <Artigo2>
          <Texto2>Fique atento aos nossos processos seletivos</Texto2>
          <Subtexto2>
            Processo seletivo estudantes 2021/1
            <br />
            Confira aqui informações sobre o processo seletivo.
          </Subtexto2>
          <Btn2>Saiba mais</Btn2>
          <Img>
            <Image
              src="/image1.png"
              alt="imagem2"
              width={506}
              height={627}
              layout="intrinsic"
              grid-area="img"
            />
          </Img>
        </Artigo2>
        <Artigo3>
          <Img>
            <Image
              src="/image2.png"
              alt="imagem3"
              width={750}
              height={760}
              layout="intrinsic"
              grid-area="img"
            />
          </Img>
          <Texto3>Nossa Missão</Texto3>
          <Subtexto3>
            Visamos a construção do conhecimento nas mais diversas áreas:
            idiomas, cultura e até softwares. Tudo isso de forma íntegra e
            gratuita, preservando, assim, tanto o ensinar quanto o aprender.
            <br />
            No primeiro semestre de 2020 mais de 3.900 pessoas tanto no Brasil
            quanto no exterior se inscreveram em cursos na Share
            <br />
            Oferecemos 18 cursos e ofertamos 370 vagas
            <br />
            Fomos destaque no G1 Notícias, Site da UFSCar Sorocaba, Rádio Jornal
            Cruzeiro do Sul e TV Sorocaba(SBT)
          </Subtexto3>
        </Artigo3>
        <Artigo4>
          <Texto4>
            "Conectar o desejo de ensinar com a vontade de aprender"
          </Texto4>
          <Subtexto4>
            "Fazer o curso de oratória na share, para mim, foi incrível! Além de
            ter a oportunidade de conhecer pessoas de outros cursos e pessoas de
            fora da UFSCar, as aulas me proporcionaram um aprendizado muito rico
            sobre técnicas de apresentação, como se portar durante um discurso e
            como ser claro e coerente ao passar uma mensagem verbal. Indico a
            Share para todos aqueles que tem vontade de aprender de uma forma
            inovadora!"
            <br />
            <br />
            <b>- Vitória Benevenuto, foi aluna do curso de Oratória</b>
            <br />
            <br />
            <br />
            "Eu fiz o curso de espanhol pós intermediário e foi muito bom,
            gostei muito da relação aluno-professor que eu tive com a minha
            professora (tanto que agora ela é minha aluna de alemão), Já sabia
            muito do idioma, mas eu não tinha nenhuma prova ou certificado e
            isso me ajudou muito: quase fui contratada como professora de
            espanhol esse ano, mas por não atender meu horário de
            disponibilidade mesmo que eu não consegui"
            <br />
            <br />
            <b>
              - Helena do Carmo, foi aluna do curso de Espanhol
              Pós-Intermediário
            </b>
          </Subtexto4>
          <Img>
            <Image
              src="/image3.png"
              alt="imagem4"
              width={750}
              height={760}
              layout="intrinsic"
              grid-area="img"
            />
          </Img>
        </Artigo4>
      </Container>
      <Footer>
        <SocialMedia>
          <Insta>
            <Image src="/insta.png" width={76} height={76} layout="fixed" />
          </Insta>
          <Face>
            <Image src="/face.png" width={56} height={56} layout="fixed" />
          </Face>
          <Linkedin>
            <Image src="/linkedin.png" width={56} height={56} layout="fixed" />
          </Linkedin>
        </SocialMedia>
        <Credits>
          Ilustrações criadas por Undraw.com
          <br />
          Icones criados por Iconify
          <br />© Share. Todos os direitos reservados.
        </Credits>
      </Footer>
    </>
  );
}
