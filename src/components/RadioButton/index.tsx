import { useField } from '@unform/core';
import React, { useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import * as S from './styles';

export interface RadioItem {
  value: string;
  label: string;
}

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  items: RadioItem[];
  style?: CSSProperties;
  variant?: 'error' | 'success';
  helperText?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  variant,
  helperText,
  items,
  style,
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);
  const selectedRef = useRef(null);

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  useEffect(() => {
    registerField<HTMLInputElement>({
      name: fieldName,
      ref: selectedRef,
      getValue: (ref) => {
        return ref.current;
      },
      setValue: (_ref, value) => {
        setSelected(value);
      },
      clearValue: () => {
        setSelected('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container style={style}>
      {items.map(({ label, value }) => (
        <S.InputContainer key={value}>
          <input
            checked={selected === value}
            onChange={(event) => {
              setSelected(event.target.value);
            }}
            type="radio"
            id={`${name}-${value}`}
            name={name}
            value={value}
          />
          <label htmlFor={`${name}-${value}`}>{label}</label>
        </S.InputContainer>
      ))}
      <S.HelperText variant={error ? 'error' : variant}>
        {error ? error : helperText}
      </S.HelperText>
    </S.Container>
  );
};

export default RadioButton;
