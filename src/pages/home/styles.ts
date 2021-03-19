import styled from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  height: auto;
  background: #ffffff;
`;

export const Texto1 = styled.span`
  font-size: 1.8rem;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 2rem;
  align-items: center;
  grid-area: texto;
  padding-left: 10vw;
`;
export const Texto2 = styled.span`
  font-size: 1.8rem;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 2rem;
  align-items: center;
  grid-area: texto;
  padding-left: 10vw;
  padding-top: 20vh;
`;
export const Texto3 = styled.span`
  font-size: 1.8rem;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 2rem;
  align-items: center;
  grid-area: texto;
  padding-left: 10vw;
`;
export const Texto4 = styled.span`
  font-size: 1.8rem;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 2rem;
  align-items: center;
  grid-area: texto;
  padding-left: 10vw;
  padding-top: 10vh;
`;
export const Subtexto1 = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  align-items: center;
  grid-area: subtexto;
  padding-right: 14vw;
  padding-left: 10vw;
  line-height: 1.5rem;
`;
export const Subtexto2 = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  align-items: center;
  grid-area: subtexto;
  padding-right: 14vw;
  padding-left: 10vw;
  line-height: 1.5rem;
`;
export const Subtexto3 = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  align-items: center;
  grid-area: subtexto;
  padding-right: 14vw;
  padding-left: 10vw;
  line-height: 1.5rem;
  margin-bottom: 5vh;
`;
export const Subtexto4 = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  align-items: center;
  grid-area: subtexto;
  padding-right: 14vw;
  padding-left: 10vw;
  line-height: 1.5rem;
`;
export const Artigo1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 12rem);
  align-items: center;
  overflow: hidden;
  grid-template-areas:
    'img texto texto'
    'img subtexto subtexto'
    'img btn .';
  background: #ffffff;
`;
export const Artigo2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 13rem);
  align-items: center;
  overflow: hidden;
  grid-template-areas:
    'texto texto . img '
    'subtexto subtexto . img'
    'btn . . img';
  background: #ffffff;
`;
export const Artigo3 = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 16rem);
  align-items: center;
  overflow: hidden;
  grid-template-areas:
    'img img texto texto texto'
    'img img subtexto subtexto subtexto';
  background: #ffffff;
`;
export const Artigo4 = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 15rem);
  align-items: center;
  overflow: hidden;
  grid-template-areas:
    'texto texto texto img img'
    'subtexto subtexto subtexto img img';
  background: #ffffff;
`;
export const Img = styled.div`
  grid-area: img;
`;
export const Btn = styled.a`
  background: #478dfb;
  border-radius: 5px;
  width: 4vw;
  min-width: 6rem;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  grid-area: btn;
  margin-left: 10vw;
  margin-bottom: 10vh;
  line-height: 1.5rem;
  color: #fff;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;

export const Btn2 = styled.a`
  background: #478dfb;
  border-radius: 5px;
  width: 4vw;
  min-width: 6rem;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  grid-area: btn;
  margin-left: 10vw;
  margin-bottom: 20vh;
  text-align: center;
  line-height: 1.5rem;
  color: #fff;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;

export const Footer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  grid-template-areas:
    '. socialmedia .'
    '. credits .';
  background: #3aa7de;
  margin-top: 10vh;
`;

export const SocialMedia = styled.div`
  padding-top: 2rem;
  grid-area: socialmedia;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
  grid-template-areas: 'insta facebook linkedin';
`;

export const Credits = styled.div`
  grid-area: credits;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 15rem);
  font-family: Lato;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Insta = styled.a.attrs((props) => ({
  href: (props.href = 'https://www.instagram.com/shareideias/'),
}))`
  background: rgba(189, 225, 250, 0.7);
  grid-area: insta;
  z-index: 1;
  opacity: 0.42;
  border-radius: 15px;
  display: flex;
  height: 6rem;
  width: 6rem;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Face = styled.a.attrs((props) => ({
  href: (props.href = 'https://www.facebook.com/shareideias/'),
}))`
  background: rgba(189, 225, 250, 0.7);
  grid-area: facebook;
  z-index: 1;
  opacity: 0.42;
  border-radius: 15px;
  display: flex;
  height: 6rem;
  width: 6rem;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Linkedin = styled.a.attrs((props) => ({
  href: (props.href = 'https://www.linkedin.com/company/associacaoshare/'),
}))`
  background: rgba(189, 225, 250, 0.7);
  grid-area: linkedin;
  z-index: 1;
  opacity: 0.42;
  border-radius: 15px;
  display: flex;
  height: 6rem;
  width: 6rem;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
`;
