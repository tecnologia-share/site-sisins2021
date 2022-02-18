import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  width: 100%;
  margin-bottom: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

interface CustomTextAreaProps {
  hasIcon?: boolean;
  variant?: 'error' | 'success';
}

export const CustomTextArea = styled.textarea<CustomTextAreaProps>`
  box-sizing: border-box;
  resize: none;
  border-radius: 0.5rem;
  outline: none;
  padding: 0.75rem ${({ hasIcon }) => (hasIcon ? '3.5rem' : '1rem')} 0.75rem
    1rem;
  font-size: 1rem;
  width: 100%;
  height: 115px;
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
          background: ${({ theme }) => theme.colors.grays[1]};
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
