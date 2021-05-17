import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
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
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  > * {
    width: 100% !important;
    height: auto !important;

    @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
      width: 10rem !important;
    }
  }
`;

export const Footer = styled.div`
  background-color: #a4e887;
  color: #ffffff;
  width: 100%;
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 2rem;
  z-index: 0;
  margin-top: 2rem;
`;

export const FeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Feather = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.625rem;
  width: 2.625rem;
  border-radius: 5px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Vector = styled(SVG)`
  color: #fffbfb;
  border-radius: 5px;
`;
