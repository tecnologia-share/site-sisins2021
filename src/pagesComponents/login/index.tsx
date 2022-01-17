import { AuthProvider } from './AuthContext';
import { LoginLayout } from './components/LoginLayout';
import { Container } from './styles';

const Login = () => {
  return (
    <AuthProvider>
      <Container>
        <LoginLayout />
      </Container>
    </AuthProvider>
  );
};

export default Login;
