import { StyledNav } from '../styles/Navbar/nav-style';
import Logo from '../components/logo';
import NavMenu from '../components/navmenu';
const Nav = () => {
  return (
    <div>
      <StyledNav>
        <NavMenu />
        <Logo />
      </StyledNav>
    </div>
  );
};

export default Nav;
