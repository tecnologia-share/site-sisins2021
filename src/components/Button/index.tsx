import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'normal' | 'small';
  enabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size,
  enabled = true,
  children,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      onClick={(event) => {
        if (!enabled) return;

        if (onClick) {
          onClick(event);
        }
      }}
      enabled={enabled}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
