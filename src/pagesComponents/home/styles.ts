import SVG from 'react-inlinesvg';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const RowLottie = styled.div<{
  lottieRight?: boolean;
  containsButton?: boolean;
}>`
  display: grid;
  margin-top: 3rem;
  margin-bottom: 3rem;
  grid-row-gap: 1.5rem;

  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas: 'title' 'lottie' 'content' 'button';

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: ${({ lottieRight, containsButton }) =>
      lottieRight
        ? `'. lottie' 'title lottie' 'content lottie' 'content lottie' ${
            containsButton ? "'button lottie'" : "'content lottie'"
          } '. lottie'`
        : `'lottie .' 'lottie title' 'lottie content' 'lottie content' ${
            containsButton ? "'lottie button'" : "'lottie content'"
          } 'lottie .'`};
  }
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  grid-area: lottie;
`;

export const RowTitle = styled.h2`
  text-align: center;
  grid-column: 1;
  grid-area: title;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    text-align: start;
  }
`;

export const RowTextContainer = styled.div`
  grid-area: content;
`;

export const RowTextItem = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.light};

  ~ p {
    margin-top: 1.5rem;
  }
`;

export const RowButton = styled.button`
  background-color: ${({ theme }) => theme.colors.greens[4]};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 10px 40px;
  justify-self: center;

  grid-area: button;
  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.1rem;
    justify-self: flex-start;
    border-radius: 10px;
    padding: 13px 70px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.greens[4]};
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
`;

export const FooterRow = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FooterCol = styled.div`
  flex: 1;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ContainerIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.whites[0]};
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  display: flex;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const Icon = styled(SVG)`
  margin: auto;
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  path {
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.white};
  }
`;
