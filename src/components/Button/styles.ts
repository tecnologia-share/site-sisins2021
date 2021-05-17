import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: 'normal' | 'small';
  enabled?: boolean;
  color?: 'blue' | 'green' | 'yellow';
}

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  overflow: hidden;
  outline: none;
  width: 9.188rem;
  min-height: 2.188rem;
  max-height: 2.188rem;
  margin-top: 2.5rem;
  margin-bottom: 5rem;

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
  }};

  ${({ enabled }) => {
    if (enabled) {
      return css`
        transition: background-color 0.2s;

        &:after {
          content: '';
          z-index: -2;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.2s;
          transition-timing-function: linear;
        }

        &:active {
          &:after {
            content: '';
            opacity: 1;
            width: 300px;
            height: 300px;
          }
        }
      `;
    }
  }};

  ${({ color, enabled }) => {
    if (color === 'blue') {
      return css`
        background-color: ${({ theme }) =>
          enabled ? theme.colors.blue : theme.colors.blues[6]};
        &:hover {
          background-color: ${({ theme }) => theme.colors.blues[5]};
        }
        &:after {
          background-color: ${({ theme }) => theme.colors.blues[4]};
        }
      `;
    }
    if (color === 'green') {
      return css`
        background-color: ${({ theme }) =>
          enabled ? theme.colors.greens[4] : theme.colors.green};
        &:hover {
          background-color: ${({ theme }) => theme.colors.greens[0]};
        }
        &:after {
          background-color: ${({ theme }) => theme.colors.greens[3]};
        }
      `;
    }
    if (color === 'yellow') {
      return css`
        background-color: ${({ theme }) =>
          enabled ? theme.colors.yellow : theme.colors.yellows[0]};
        &:hover {
          background-color: ${({ theme }) => theme.colors.yellows[3]};
        }
        &:after {
          background-color: ${({ theme }) => theme.colors.yellows[2]};
        }
      `;
    }
  }}
`;
