import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  href: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};

export default Button;
