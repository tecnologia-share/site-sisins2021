import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext, signOut } from '../../pagesComponents/login/AuthContext';
import {
  ButtonsContainer,
  Container,
  Content,
  Logo,
  NavButton,
  UserIcon,
  UserIconContainer,
  UserInfoContainer,
  UserText,
} from './styles';

const Header: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);

  const login = () => {
    if (!isAuthenticated) {
      signOut();
    } else {
      router.push('/login');
    }
  };

  return (
    <Container>
      <Content>
        <Link href="/">
          <Logo src="/icons/Logo.svg" />
        </Link>

        <ButtonsContainer>
          <Link href="/">
            <NavButton active={router.pathname === '/'}>Home</NavButton>
          </Link>
          <Link href="/faq">
            <NavButton active={router.pathname === '/faq'}>FAQ</NavButton>
          </Link>
          <Link href="/inscricoes">
            <NavButton active={router.pathname === '/inscricoes'}>
              Inscrições
            </NavButton>
          </Link>
        </ButtonsContainer>

        <UserInfoContainer>
          <UserText onClick={login}>
            {isAuthenticated ? 'Logout' : 'Faça login'}
          </UserText>
          <UserIconContainer>
            <UserIcon src="/icons/User.svg" />
          </UserIconContainer>
        </UserInfoContainer>
      </Content>
    </Container>
  );
};

export default Header;
