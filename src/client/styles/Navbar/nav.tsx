import { StyledNav } from '../Navbar/nav-style';
import Logo from '../Navbar/Nav-items/Logo/logo';
import MenuHamb from '../Navbar/Nav-items/Menu-hamburger/menu-hamb';
import NavMenu from '../Navbar/Nav-items/NavMenu/navmenu';
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
