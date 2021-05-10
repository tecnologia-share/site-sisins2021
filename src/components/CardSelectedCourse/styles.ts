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
          box-shadow: 0 0 0.5rem ${theme.colors.blues[0]};
        `;
      case 'secondary':
        return css`
          box-shadow: 0 0 0.5rem ${theme.colors.greens[0]};
        `;
      default:
        return css`
          box-shadow: 0 0 0.25rem ${theme.colors.grays[3]};
        `;
    }
  }};
  border-radius: 0.3125rem;
  width: 100%;
  min-height: 82px;
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
  min-height: 100%;
  min-width: 0.5rem;
  background: ${({ option, theme }) =>
    option === 'first' ? theme.colors.blue : theme.colors.green};

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    min-width: 1rem;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0.5rem 0.25rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 0.75rem;
  font-weight: bold;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  width: 100%;
  padding-right: 1.75rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-right: 1.75rem;
    padding-right: 2.5rem;
  }
`;

export const EmptyText = styled.p`
  height: 100%;
  width: 100%;
  font-size: 0.625rem;
  padding: 1rem;
  text-align: center;
  align-self: center;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const Description = styled.p`
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.grays[4]};
  height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;

  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    height: 57px;
    font-size: 1rem;
    margin-bottom: 1rem;
    -webkit-line-clamp: 3;
  }
`;

export const Info = styled.p`
  cursor: pointer;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.blues[1]};

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1rem;
  }
`;

export const CloseIcon = styled(SVG)`
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 1rem;
  width: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    right: 1rem;
    top: 1rem;
    height: 1.5rem;
    width: 1.5rem;
  }
`;
