import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

interface ContainerProps {
  selectedOption?: 'first' | 'secondary';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  ${({ selectedOption, theme }) => {
    switch (selectedOption) {
      case 'first':
        return css`
          box-shadow: 0 0.25rem 1rem ${theme.colors.blues[0]};
        `;
      case 'secondary':
        return css`
          box-shadow: 0.5rem 0.5rem 1rem ${theme.colors.greens[0]};
        `;
      default:
        return css`
          box-shadow: 0.5rem 0.5rem 0.25rem ${theme.colors.grays[3]};
        `;
    }
  }};
  border-radius: 0 0.3125rem 0.3125rem 0;
  min-height: 108px;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    min-height: 163px;
    border-radius: 0.9375rem;
  }
`;

interface ActiveMarkProps {
  option: 'first' | 'secondary';
}

export const ActiveMark = styled.div<ActiveMarkProps>`
  height: 100%;
  min-width: 0.5rem;
  background: ${({ option, theme }) =>
    option === 'first' ? theme.colors.blue : theme.colors.green};
  border-radius: 0 0.625rem 0.625rem 0;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    min-width: 1rem;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0.5rem 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  width: 100%;
  padding-right: 2.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grays[4]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  min-height: 38px;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    min-height: 57px;
    margin-bottom: 1rem;
    -webkit-line-clamp: 3;
  }
`;

export const Info = styled.p`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blues[1]};
`;

interface CheckIconProps {
  checked?: boolean;
}

export const CheckIcon = styled(SVG)<CheckIconProps>`
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  height: 1.5rem;
  width: 1.5rem;

  path {
    fill: ${({ checked, theme }) =>
      checked ? theme.colors.blues[1] : theme.colors.grays[5]};
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    top: 1rem;
  }
`;
