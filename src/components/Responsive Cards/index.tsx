import React from 'react';
import {
  Cards,
  CardBody,
  CardHeader,
  Button,
  StyledCard,
  CardContainer,
  CloseBtn,
} from '../Responsive Cards/styles';

export default function ResponsiveCards() {
  return (
    <Cards>
      <Card
        id={1}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="30"
        height="30"
      />
      <Card
        id={2}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="30"
        height="30"
      />
      <Card
        id={3}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="30"
        height="30"
      />
      <Card
        id={4}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="30"
        height="30"
      />
      <Card
        id={5}
        header="Teste"
        text="Apenas um simples teste"
        href="/ulala"
        width="30"
        height="30"
      />
    </Cards>
  );
}

// botao de switch entre primary e secondary selection
// botao de select, se não houver primário, assignar como primario, se houver primario, assignar como secundário, se houver primário e secundário, alertar para remover uma seleção.
//botao de 'close' para o primario e secundário onde remove a seleção para a escolha de outra opção.
//confirmar como esconder o texto do cardbody quando for muito extenso para não ultrapassar 2 linhas no preview.
//Aplicar Props ao Cards styled component. ===== retirar o cards e definir uma card apenas

export const Card = (props: { header; text; href; id; width; height }) => {
  return (
    <>
      <StyledCard className="card">
        <CardContainer>
          <CardHeader>{props.header}</CardHeader>
          <CloseBtn>X</CloseBtn>
          <CardBody>{props.text}</CardBody>
          <Button href={props.href}>Mais Informações</Button>
        </CardContainer>
      </StyledCard>
    </>
  );
};
