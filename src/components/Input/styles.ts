import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  width: 100%;
  margin-bottom: 1rem;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

interface CustomInputProps {
  hasIcon?: boolean;
  variant?: 'error' | 'success';
}

export const CustomInput = styled.input<CustomInputProps>`
  box-sizing: border-box;
  box-shadow: 0 0.25rem 0.25rem ${({ theme }) => theme.colors.blacks[1]};
  border-radius: 0.5rem;
  outline: none;
  padding: 0.75rem ${({ hasIcon }) => (hasIcon ? '3.5rem' : '1rem')} 0.75rem
    1rem;
  font-size: 1rem;
  width: 100%;

  ${({ variant }) => {
    switch (variant) {
      case 'error':
        return css`
          border: 0.0625rem solid ${({ theme }) => theme.colors.reds[0]};
          background: ${({ theme }) => theme.colors.reds[1]};
        `;
      case 'success':
        return css`
          border: 0.0625rem solid ${({ theme }) => theme.colors.greens[1]};
          background: ${({ theme }) => theme.colors.greens[2]};
        `;
      default:
        return css`
          border: 0.0625rem solid transparent;
          background: ${({ theme }) => theme.colors.white};
        `;
    }
  }};

  &:focus {
    ${({ variant }) => {
      switch (variant) {
        case 'error':
          return css`
            box-shadow: 0 0.25rem 0.25rem ${({ theme }) => theme.colors.reds[2]};
          `;
        case 'success':
          return css`
            box-shadow: 0 0.25rem 0.25rem
              ${({ theme }) => theme.colors.greens[3]};
          `;
        default:
          return css`
            border: 1px solid ${({ theme }) => theme.colors.blue};
            box-shadow: 0 0.25rem 0.25rem
              ${({ theme }) => theme.colors.blues[2]};
          `;
      }
    }};
  }
`;

interface IconProps {
  iconcolor?: string;
}

export const Icon = styled(SVG)<IconProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;

  ${({ iconcolor }) => {
    if (iconcolor) {
      return css`
        path {
          fill: ${iconcolor};
        }
      `;
    }
  }}
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
