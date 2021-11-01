import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grays[10]};
  border-radius: 5px;

  h1 {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: 2rem;

    h1 {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }

  span {
    margin: 0;
    text-align: right;
  }
`;
