import { useCallback, useContext, useState } from 'react';
import Input, { InputProps } from '../Input';
import { ThemeContext } from 'styled-components';

const InputPassword: React.FC<InputProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const { colors } = useContext(ThemeContext);

  const changeVisibility = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  return (
    <Input
      type={visible ? 'text' : 'password'}
      iconColor={colors.grays[2]}
      iconSrc={visible ? 'icons/Eye.svg' : 'icons/EyeOff.svg'}
      iconOnClick={changeVisibility}
      {...props}
    />
  );
};

export default InputPassword;
