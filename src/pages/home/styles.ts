import styled from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  height: auto;
`;
export const Imagem = styled.span`
  grid-area: img;
`;
export const Text = styled.span`
  font-size: 2re;
`;
export const Artigo1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'img art';
`;
export const Artigo2 = styled.div`
  grid-area: art2;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'art img';
`;
export const Artigo3 = styled.div`
  grid-area: art3;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'img art;
`;
export const Artigo4 = styled.div`
  grid-area: art4;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'art img';
`;
