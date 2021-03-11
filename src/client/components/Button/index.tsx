import Link from 'next/link';
import { BtnWrap } from '../../components/Button/styles';
import PropTypes from 'prop-types';

function Button({ href, name }) {
  return (
    <Link href={href} passHref>
      <BtnWrap>{name}</BtnWrap>
    </Link>
  );
}

Button.propTypes = {
  href: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};
