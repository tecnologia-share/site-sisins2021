import styled from 'styled-components';

export const TitleSendEmail = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
`;

export const DescriptionSendEmail = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  padding: 0 0.9rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const LottieWrapper = styled.div`
  display: flex;
  max-height: 70% !important;

  > * {
    height: auto !important;
    width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.blues[8]};
  color: ${({ theme }) => theme.colors.white};
`;
