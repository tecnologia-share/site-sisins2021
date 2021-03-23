import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'normal' | 'small';
}

const Button: React.FC<ButtonProps> = ({ size, children, ...rest }) => {
  return (
    <StyledButton size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
