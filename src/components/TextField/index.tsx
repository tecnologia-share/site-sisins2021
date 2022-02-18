import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';
import { Container, CustomTextArea, HelperText, TextContainer } from './styles';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  variant?: 'error' | 'success';
  helperText?: string;
  placeholder?: string;
}

const TextField: React.FC<TextAreaProps> = ({
  name,
  variant,
  helperText,
  style,
  placeholder,
  ...rest
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    registerField<HTMLTextAreaElement>({
      name: fieldName,
      ref: textAreaRef,
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
    <Container style={style}>
      <TextContainer>
        <CustomTextArea
          placeholder={placeholder}
          ref={textAreaRef}
          defaultValue={defaultValue}
          variant={variant}
          {...rest}
        ></CustomTextArea>
      </TextContainer>

      {(helperText || error) && (
        <HelperText variant={error ? 'error' : variant}>
          {error ? error : helperText}
        </HelperText>
      )}
    </Container>
  );
};

export default TextField;
