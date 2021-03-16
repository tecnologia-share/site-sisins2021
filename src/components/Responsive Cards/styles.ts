import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  place-items: center center;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  padding: 1rem;
  grid-gap: 2rem;
`;

export const StyledCard = styled.div`
  background-color: #333;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
`;

export const CardHeader = styled.h4``;

export const CardBody = styled.p``;

export const Button = styled.a`
  color: white;
  padding: 1rem;
`;

export const CardImage = styled.img`
  display: block;
  position: relative;
  border-radius: 1rem 1rem 0 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  alt: ${(props) => props.alt};
  src: ${(props) => props.src};
`;

export const CardContainer = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-around;
`;
