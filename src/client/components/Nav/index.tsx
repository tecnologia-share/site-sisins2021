import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { StyledLogo, StyledNav, StyledBtn, StyledButton } from '../Nav/styles';

export const Nav = () => {
  return (
    <div>
      <StyledNav>
        <Logo />
        <NavMenu />
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
          width={40}
          height={40}
        />
      </a>
    </StyledLogo>
  );
};

const NavMenu = () => {
  return (
    <ul className="lista">
      <Btn href="/" name="Home" className="home" />
      <Btn href="/" name="FAQ" className="faq" />
      <Btn href="/" name="Inscrições" className="inscricoes" />
    </ul>
  );
};

const MenuHamb = () => {
  return (
    <ul className="listaHamb">
      <Btn href="/" name="Home" className="home" />
      <Btn href="/" name="FAQ" className="faq" />
      <Btn href="/" name="Inscrições" className="inscricoes" />
    </ul>
  );
};

function Button({ href, name }) {
  return (
    <Link href={href} passHref>
      <StyledBtn className={name}>{name}</StyledBtn>
    </Link>
  );
}

const Btn = ({ href, name, className }) => {
  return (
    <StyledButton>
      <Button href={href} name={name} />
    </StyledButton>
  );
};

Button.propTypes = {
  href: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};
