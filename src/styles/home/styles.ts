import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  height: 100%;
  overflow: auto;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  line-height: 1.2rem;
  align-self: center;
`;

export const Text = styled.div`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 2.25rem;
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 100%;

  > * {
    width: 100% !important;
    height: auto !important;
    margin-bottom: 2rem !important;

    @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
      width: 10rem !important;
      margin-bottom: 2rem !important;
    }
  }
`;
