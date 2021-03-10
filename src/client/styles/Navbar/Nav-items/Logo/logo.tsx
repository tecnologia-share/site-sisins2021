import Image from 'next/image';
import { StyledLogo } from '../Logo/logo-styled';

const Logo = () => {
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

export default Logo;
