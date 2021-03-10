import { StyledNav } from '../Navbar/nav-style';
import Link from 'next/link';
import Logo from '../Navbar/Nav-items/Logo/logo';
const Nav = () => {
  return (
    <StyledNav>
      <>
        <nav className="flex items-center flex-wrap bg-green-300 p-3 ">
          <Link href="/">
            <Logo />
          </Link>
        </nav>
      </>
    </StyledNav>
  );
};

export default Nav;
