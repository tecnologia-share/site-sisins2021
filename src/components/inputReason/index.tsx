import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';
import {
  Container,
  CustomInput,
  HelperText,
  Icon,
  InputContainer,
  Label,
} from './styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  iconSrc?: string;
  variant?: 'error' | 'success';
  helperText?: string;
  iconColor?: string;
  iconOnClick?: () => void;
}

const InputReason: React.FC<InputProps> = ({
  name,
  label,
  iconSrc,
  variant,
  helperText,
  iconColor,
  style,
  iconOnClick,
  ...rest
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField<HTMLInputElement>({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <CustomInput
          ref={inputRef}
          defaultValue={defaultValue}
          variant={variant}
          hasIcon={!!iconSrc}
          {...rest}
          style={style}
        />
        <Icon
          iconcolor={iconColor}
          src={iconSrc}
          onMouseDown={(event) => {
            event.preventDefault();
            iconOnClick();
          }}
        />
      </InputContainer>
      {(helperText || error) && (
        <HelperText variant={error ? 'error' : variant}>
          {error ? error : helperText}
        </HelperText>
      )}
    </Container>
  );
};

export default InputReason;
