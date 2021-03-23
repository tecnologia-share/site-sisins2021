import {
  Container,
  InputContainer,
  CustomInput,
  Icon,
  HelperText,
} from './styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconSrc?: string;
  variant?: 'error' | 'success';
  helperText?: string;
  iconColor?: string;
  iconOnClick?: () => void;
}

const Input: React.FC<InputProps> = ({
  iconSrc,
  variant,
  helperText,
  iconColor,
  style,
  iconOnClick,
  ...rest
}) => {
  return (
    <Container>
      <InputContainer style={style}>
        <CustomInput
          variant={variant}
          hasIcon={!!iconSrc}
          placeholder="Placeholder"
          {...rest}
        />
        <Icon iconcolor={iconColor} src={iconSrc} onClick={iconOnClick} />
      </InputContainer>
      {helperText && <HelperText variant={variant}>{helperText}</HelperText>}
    </Container>
  );
};

export default Input;
