import Select, { SelectItem } from 'components/Select';
import { useField } from '@unform/core';
import { CSSProperties, useEffect, useRef, useState } from 'react';

interface SelectUnformProps {
  items: SelectItem[];
  name: string;
  placeholder?: string;
  style?: CSSProperties;
  variant?: 'error' | 'success';
  helperText?: string;
}

const SelectUnform = ({
  items,
  name,
  placeholder,
  style,
  helperText,
  variant,
}: SelectUnformProps) => {
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
    <Select
      items={items}
      value={selected}
      onChange={(item) => {
        setSelected(item.value);
      }}
      helperText={helperText || error}
      variant={error ? 'error' : variant}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default SelectUnform;
