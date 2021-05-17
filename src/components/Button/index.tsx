import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'normal' | 'small';
  enabled?: boolean;
  color?: 'blue' | 'green' | 'yellow';
}

const Button: React.FC<ButtonProps> = ({
  size,
  enabled = true,
  color,
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
      color={color}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
