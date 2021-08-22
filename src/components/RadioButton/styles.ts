import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
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
