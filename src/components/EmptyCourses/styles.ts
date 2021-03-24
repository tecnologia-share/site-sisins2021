import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
`;

export const Text = styled.h2`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
  }
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 100%;

  > * {
    width: 100% !important;
    max-width: 30rem !important;
    height: auto !important;

    @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
      width: 30rem !important;
    }
  }
`;
