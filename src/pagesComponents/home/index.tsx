import { useRouter } from 'next/router';
import { Container, Title } from './styles';

const Home = () => {
  const router = useRouter();

  return (
    <Container>
      <Title
        onClick={() =>
          router.push(
            {
              pathname: '/inscricoes/concluir',
              query: {
                course1: JSON.stringify({
                  alo: {
                    test: '1',
                    test2: [{ aaaaa: 'bbb' }],
                  },
                }),
                course2: JSON.stringify({
                  alo2: {
                    test4: '2',
                    test5: [{ cccc: 'dddd' }],
                  },
                }),
              },
            },
            '/inscricoes/concluir'
          )
        }
      >
        Home
      </Title>
    </Container>
  );
};

export default Home;
