import SVG from 'react-inlinesvg';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
  }
`;

export const FormSection = styled.section`
  width: 100%;
  padding: 2rem;
  padding-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    overflow: auto;
    padding-top: 4rem;
    grid-row: 1;
    grid-column: 2;
  }
`;

export const FormSectionContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    max-width: 28rem;
    margin: 0 auto;
  }
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

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    border-width: 1.5px;
    min-width: 5rem;
    min-height: 5rem;
    margin-bottom: 2rem;

    span {
      font-size: 1.5rem;
    }

    &::before {
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 3px;
    }
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

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    gap: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 4rem;
    grid-row: 1;
    grid-column: 1;
  }
`;

export const FooterInfo = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    width: 100%;
  }
`;

export const FooterIconContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    min-width: 8rem;
    min-height: 8rem;
    background-color: ${({ theme }) => theme.colors.grays[8]};
    border-radius: 1rem;
    margin-right: 1.5rem;
  }
`;

export const Icon = styled(SVG)`
  min-height: 5rem;
  height: 5rem;
  min-width: 5rem;
  width: 5rem;

  path {
    fill: ${({ theme }) => theme.colors.white};
  }
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

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    flex: 1;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 7.75rem;

  > * {
    border-radius: 1rem;
    width: 100% !important;
    height: auto !important;
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    width: 50%;
    margin-bottom: 4rem;
  }
`;
