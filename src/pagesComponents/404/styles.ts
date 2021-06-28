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
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    margin-bottom: 6rem;
  }
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 100%;

  > * {
    width: 100% !important;
    height: auto !important;
    margin-bottom: 4rem !important;

    @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
      width: 46rem !important;
      margin-bottom: 6rem !important;
    }
  }
`;
