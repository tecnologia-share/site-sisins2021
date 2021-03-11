import Image from 'next/image';
import Link from 'next/link';
import { StyledBtn } from '../Nav/styles';
import PropTypes from 'prop-types';
import { StyledLogo } from '../Nav/styles';
import { StyledNav } from '../Nav/styles';

export const Nav = () => {
  return (
    <div>
      <StyledNav>
        <MenuHamb />
        <NavMenu />
        <Logo />
      </StyledNav>
    </div>
  );
};

export const Logo = () => {
  return (
    <StyledLogo>
      <a href="/">
        <Image
          alt="Logo da Share"
          src="/Navbarbrand.png"
          layout="intrinsic"
          width={50}
          height={50}
        />
      </a>
    </StyledLogo>
  );
};

const NavMenu = () => {
  return (
    <ul>
      <Button href="/" name="Home" />
      <Button href="/FAQ" name="FAQ" />
      <Button href="/inscricoes" name="Inscrições" />
      <Button href="/news" name="Notícias" />
    </ul>
  );
};

const MenuHamb = () => {
  return (
    <ul>
      <Button href="/" name="Home" />
      <Button href="/FAQ" name="FAQ" />
      <Button href="/inscricoes" name="Inscrições" />
      <Button href="/news" name="Notícias" />
    </ul>
  );
};

function Button({ href, name }) {
  return (
    <Link href={href} passHref>
      <StyledBtn>{name}</StyledBtn>
    </Link>
  );
}

Button.propTypes = {
  href: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};
