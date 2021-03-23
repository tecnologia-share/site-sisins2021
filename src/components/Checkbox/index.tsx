import { Container, HiddenInput, Icon, Label } from './styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  style,
  ...rest
}) => {
  return (
    <Container style={style}>
      <HiddenInput
        id="hidden-input"
        checked={checked}
        {...rest}
        type="checkbox"
      />
      <Icon
        checked={checked}
        src={checked ? '/icons/Checkbox_checked.svg' : '/icons/Checkbox.svg'}
      />
      {label && <Label htmlFor="hidden-input">{label}</Label>}
    </Container>
  );
};

export default Checkbox;
