import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface IconProps {
  checked?: boolean;
}

export const Icon = styled(SVG)<IconProps>`
  min-height: 1.5rem;
  min-width: 1.5rem;

  path {
    fill: ${({ checked, theme }) =>
      checked ? theme.colors.blue : theme.colors.grays[5]};
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
  margin-left: 0.25rem;
`;
