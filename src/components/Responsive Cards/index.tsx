import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import React from 'react';
import {
  Cards,
  CardBody,
  CardHeader,
  Button,
  StyledCard,
  CardImage,
  CardContainer,
} from '../Responsive Cards/styles';

export default function ResponsiveCards() {
  return (
    <Cards>
      <Card
        alt={1}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="50"
        height="50"
        src="Navbarbrand.png"
      />
      <Card
        alt={2}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="50"
        height="50"
        src="Navbarbrand.png"
      />
      <Card
        alt={3}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="50"
        height="50"
        src="Navbarbrand.png"
      />
      <Card
        alt={4}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="50"
        height="50"
        src="Navbarbrand.png"
      />
      <Card
        alt={5}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="50"
        height="50"
        src="user.png"
      />
    </Cards>
  );
}

export const CardImg = (props: { src; alt; width; height }) => {
  return (
    <CardImage
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

export const Card = (props: {
  header;
  text;
  href;
  alt;
  src;
  width;
  height;
}) => {
  return (
    <>
      <StyledCard>
        <CardContainer>
          <CardImg
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
          <CardHeader>{props.header}</CardHeader>
          <CardBody>{props.text}</CardBody>
          <Button href={props.href}>More..</Button>
        </CardContainer>
      </StyledCard>
    </>
  );
};
