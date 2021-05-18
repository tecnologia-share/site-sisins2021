import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;
  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    display: flex;
  } ;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  line-height: 1.2rem;
  align-self: center;
  grid-area: title;

  @media (max-width: 340px) {
    font-size: 0.925rem;
  }
`;

export const Text = styled.div`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 1.2rem;
  grid-area: txt;
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 18.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  grid-area: lottieWrapper;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    height: 12.313rem;
    width: auto;
  }
  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    height: 17.825rem;
    width: auto;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a4e887;
  color: #ffffff;
  width: 100%;
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 2rem;
  z-index: 0;
  margin-top: 2rem;
  grid-area: footer;
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
