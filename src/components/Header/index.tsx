import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  Container,
  Content,
  ButtonsContainer,
  NavButton,
  Logo,
  UserInfoContainer,
  UserText,
  UserIconContainer,
  UserIcon,
} from './styles';

const Header: React.FC = () => {
  const router = useRouter();

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
          <UserText>Faça login</UserText>
          <UserIconContainer>
            <UserIcon src="/icons/User.svg" />
          </UserIconContainer>
        </UserInfoContainer>
      </Content>
    </Container>
  );
};

export default Header;
