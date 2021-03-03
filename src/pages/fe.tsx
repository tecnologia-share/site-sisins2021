import { Container, List, Sidebar, Navbar } from '../client/styles/styles';
import Button from '../client/styles/components/button';

const Fe = () => {
  {
    document.title = 'Front-End Playground';
  }
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <List />
      <Button>My Button here</Button>
    </Container>
  );
};

export default Fe;
