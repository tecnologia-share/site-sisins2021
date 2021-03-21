import Header from '../Header';
import { Container, ContentContainer } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Layout;
