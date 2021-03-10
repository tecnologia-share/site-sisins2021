import Image from 'next/image';
import { StyledLogo } from '../Logo/logo-styled';

const Logo = () => {
  return (
    <StyledLogo>
      <Image
        alt="Logo da Share"
        src="/Navbarbrand.png"
        layout="intrinsic"
        width={60}
        height={60}
      />
    </StyledLogo>
  );
};

export default Logo;
