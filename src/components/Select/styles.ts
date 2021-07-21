import SVG from 'react-inlinesvg';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const SelectControl = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 3rem;
  position: relative;
  outline: none;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.25rem 0.25rem ${({ theme }) => theme.colors.blacks[1]};
  border-radius: 0.5rem;
  padding: 0 0.5rem 0 1rem;
  gap: 0.5rem;
`;

export const SelectValueContainer = styled.div`
  flex: 1;
  position: relative;
`;

interface SelectValueProps {
  visible: boolean;
  disabled?: boolean;
}

export const SelectValue = styled.span<SelectValueProps>`
  display: ${({ visible }) => (visible ? '' : 'none')};
  width: 100%;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);
  opacity: ${({ disabled }) => (disabled ? '0.55' : '1')};
`;

export const SelectInput = styled.input`
  width: 100%;
  background: 0 center;
  border: 0;
  font-size: inherit;
  opacity: 1;
  outline: 0;
  padding: 0;
  color: inherit;
`;

export const SelectIndicator = styled.div`
  display: flex;
`;

export const Icon = styled(SVG)`
  min-height: 1.5rem;
  min-width: 1.5rem;

  path {
    fill: ${({ theme }) => theme.colors.blue};
  }
`;

interface SelectMenuProps {
  open: boolean;
}

export const SelectMenu = styled.div<SelectMenuProps>`
  position: absolute;
  top: 100%;
  max-height: 200px;
  overflow: auto;
  margin-top: 1rem;
  padding: 1rem;
  z-index: 999;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.blues[8]};
  box-shadow: 0px 0.25rem 0.25rem ${({ theme }) => theme.colors.blacks[1]};
  border-radius: 0.5rem;
`;

interface SelectMenuItemProps {
  active: boolean;
}

export const SelectMenuItemContainer = styled.div<SelectMenuItemProps>`
  ${({ active }) => {
    if (active) {
      return css`
        background-color: ${({ theme }) => theme.colors.blues[7]};
        color: ${({ theme }) => theme.colors.blues[9]};
      `;
    }
  }}
  border-radius: 0.25rem;
  padding: 0.25rem;
  cursor: default;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blues[7]};
    color: ${({ theme }) => theme.colors.blues[9]};
  }
`;

interface HelperTextProps {
  variant?: 'error' | 'success';
}

export const HelperText = styled.p<HelperTextProps>`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-left: 1rem;

  ${({ variant }) => {
    switch (variant) {
      case 'error':
        return css`
          color: ${({ theme }) => theme.colors.reds[0]};
        `;
      case 'success':
        return css`
          color: ${({ theme }) => theme.colors.greens[1]};
        `;
      default:
        return css`
          color: ${({ theme }) => theme.colors.grays[6]};
        `;
    }
  }};
`;

export const SelectMenuItemText = styled.p`
  cursor: default;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
