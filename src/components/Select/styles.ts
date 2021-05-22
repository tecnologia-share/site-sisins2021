import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const SelectControl = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 48px;
  position: relative;
  outline: none;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 0.5rem 0 1rem;
  gap: 0.5rem;
`;

export const SelectValueContainer = styled.div`
  flex: 1;
  position: relative;
`;

interface SelectValueProps {
  visible: boolean;
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
`;

export const SelectInput = styled.input`
  width: 100%;
  background: 0 center;
  border: 0px;
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
  margin-top: 16px;
  padding: 1rem;
  z-index: 1;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background: #ffffff;
  border: 0.5px solid #0099ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

interface SelectMenuItemProps {
  active: boolean;
}

export const SelectMenuItemContainer = styled.div<SelectMenuItemProps>`
  ${({ active }) => {
    if (active) {
      return css`
        background-color: rgba(193, 216, 231, 0.45);
        color: #0e9efe;
      `;
    }
  }}
  border-radius: 4px;
  padding: 4px;
  cursor: default;
  width: 100%;

  &:hover {
    background-color: rgba(193, 216, 231, 0.45);
    color: #0e9efe;
  }
`;

export const SelectMenuItemText = styled.p`
  cursor: default;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
