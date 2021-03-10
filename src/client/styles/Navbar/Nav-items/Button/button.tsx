import Link from 'next/link';
import styled from 'styled-components';
const Wrap = styled.a`
  text-decoration: none;
  letter-spacing: 2px;
`;
function Button({ href, name }) {
  return (
    <Link href={href} passHref>
      <Wrap>{name}</Wrap>
    </Link>
  );
}

export default Button;
