import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    flex-direction: row-reverse;
  }
`;

export const FormSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  padding-bottom: 3rem;
`;

export const FormSectionContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;

  border-radius: 50%;
  min-width: 2.5rem;
  min-height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blues[8]};

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blues[8]};
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    text-align: left;
  }
`;

export const FooterSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blues[8]};
  padding: 1rem;

  display: grid;
  grid-template-columns: 7.75rem minmax(0, 1fr);
  gap: 1rem;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 7.75rem;

  > * {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100% !important;
    height: auto !important;
  }
`;
