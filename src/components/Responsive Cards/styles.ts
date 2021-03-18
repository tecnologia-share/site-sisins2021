import styled from 'styled-components';

export const Cards = styled.div`
  width: 100vw;
  height: auto;
  display: grid;
  place-items: center center;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  padding: 1rem;
  grid-gap: 1rem;
`;

export const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 3px rgba(64, 64, 64, 0.15);
  border-radius: 5px;
  letter-spacing: 0;
  font-size: 1rem;
`;

export const CardHeader = styled.h4`
  font-family: Lato;
  font-style: bold;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  color: #000000;
  grid-area: title;
  padding-bottom: 0.1rem;
`;

export const CardBody = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #707070;
  grid-area: text;
  padding-bottom: 0.3rem;
`;

export const Button = styled.a`
  color: #1b6eeb;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 0.6rem;
  line-height: 1rem;
  grid-area: btn;
  padding-bottom: 0.2rem;
`;

export const CardContainer = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  justify-content: space-around;
  overflow-wrap: break-word;
  padding: 0.3rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'title title closebtn'
    'text text text '
    'btn btn btn';
`;

export const CloseBtn = styled.span`
  grid-area: closebtn;
  float: right;
  display: inline-block;
  background: #ffffff;
`;
