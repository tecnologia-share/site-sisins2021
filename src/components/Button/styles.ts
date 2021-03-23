import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: 'normal' | 'small';
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  ${({ size, theme }) => {
    if (size === 'small') {
      return css`
        font-size: 0.75rem;
        padding: 0.5rem 1rem;
        border-radius: 0.3125rem;

        @media (min-width: ${theme.sizes.mobile}) {
          font-size: 1rem;
          padding: 1rem 2rem;
          border-radius: 0.625rem;
        }
      `;
    } else {
      return css`
        font-size: 1rem;
        padding: 1rem 2rem;
        border-radius: 0.3125rem;
      `;
    }
  }}
`;
