import { useField } from '@unform/core';
import Select, { SelectItem } from 'components/Select';
import { CSSProperties, useEffect, useRef, useState } from 'react';

interface SelectUnformProps {
  items: SelectItem[];
  name: string;
  placeholder?: string;
  style?: CSSProperties;
  variant?: 'error' | 'success';
  helperText?: string;
  id: string;
  onChange?: (item: SelectItem) => void;
}

const SelectUnform = ({
  items,
  name,
  placeholder,
  style,
  helperText,
  id,
  variant,
  onChange,
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
      id={id}
      items={items}
      value={selected}
      onChange={(item) => {
        setSelected(item.value);
        if (onChange) {
          onChange(item);
        }
      }}
      helperText={helperText || error}
      variant={error ? 'error' : variant}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default SelectUnform;
