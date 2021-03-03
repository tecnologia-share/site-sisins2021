import { Container, List, Sidebar, Navbar } from '../client/styles/styles';
import Button, {
  Icon,
  Curso1,
  Curso2,
} from '../client/styles/components/button';

const Fe = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Sidebar>
        <Curso1 />
        <Button>
          <Icon className="fas fa-exchange-alt"> </Icon>
        </Button>
        <Curso2 />
      </Sidebar>
      <List />
    </Container>
  );
};

export default Fe;
