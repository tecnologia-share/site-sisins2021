import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const MobileContainer = styled.div`
  @media (min-width: 680px) {
    display: none;
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 2.25rem;
  }
`;

export const Container = styled.div`
  @media (max-width: 680px) {
    display: none;
  }

  @media (min-width: 680px) {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 2, 1fr;
    grid-row-gap: 2.5rem;
    grid-template-areas:
      'leftContainer rightContainer'
      'leftContainer rightContainer'
      'leftContainer rightContainer'
      'leftContainer rightContainer';
    padding-left: 6vw;
    margin-top: 5.25rem;
    margin-bottom: -5rem;
    width: 80vw;
  }
`;

export const LeftContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  grid-area: leftContainer;

  @media (min-width: 680px) {
    flex-direction: column;
  } ;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: rightContainer;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-template-rows: repeat(minmax(3, 7), 1fr);
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  line-height: 1.2rem;
  align-self: center;
  grid-area: title;
  z-index: 2;

  @media (max-width: 360px) {
    font-size: 0.925rem;
    padding-top: 0.75rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 680px) {
    width: 45vw;
    margin-left: 7.5rem;
    padding-top: 2.5rem;
  } ;
`;

export const TitleBottom = styled.h1`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  line-height: 1.2rem;
  align-self: center;
  grid-area: titleBottom;
  z-index: 2;

  @media (max-width: 360px) {
    font-size: 0.925rem;
    width: 87.5vw;
  }
  @media (min-width: 360px) {
    width: 87.5vw;
  }
  @media (min-width: 680px) {
    width: 45vw;
    font-size: 1rem;
    margin-right: 5rem;
  } ;
`;

export const Text = styled.div`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 1.2rem;
  grid-area: txt;
  z-index: 2;
  margin-top: 1.75rem;
  @media (max-width: 360px) {
    font-size: 0.925rem;
    width: 87.5vw;
  }
  @media (max-width: 680px) {
    width: 80vw;
  }
  @media (min-width: 680px) {
    width: 45vw;
    margin-left: 7.5rem;
    margin-top: 0.75rem;
  } ;
`;

export const TextBottom = styled.div`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 1.2rem;
  grid-area: txtBottom;
  z-index: 2;

  @media (max-width: 360px) {
    font-size: 0.925rem;
    width: 80vw;
  }
  @media (min-width: 360px) {
    width: 87.5vw;
  }
  @media (min-width: 680px) {
    width: 45vw;
    padding-top: 2.5rem;
    margin-right: 5rem;
  } ;
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 18.75rem;
  grid-area: lottieWrapper;
  z-index: 1;
  overflow-y: clip;

  @media (max-width: 360px) {
    font-size: 0.925rem;
    margin-top: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    height: 14.313rem;
    width: auto;
    margin-top: 1rem;
  }
  @media (min-width: 680px) {
    transform: scale(1.5);
    padding-top: 1.2rem;
  } ;
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
  margin-top: 4rem;
  z-index: 0;
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
