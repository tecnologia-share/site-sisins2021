import { Nav } from '../../components/Nav/index';
import { Container, Imagem, Artigo1 } from '../../pages/home/styles';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Container>
        <Artigo1>
          <Imagem />
        </Artigo1>
      </Container>
    </>
  );
}
