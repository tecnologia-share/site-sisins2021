import React from 'react';
import styled from 'styled-components';
// rem
// grid / flexbox ao inves do top,left, etc.
const StyledButton = styled.button`
  font-size: 3vh;
  top: 30vh;
  left: 11vw;
  display: flex;
  position: relative;
  border: 0;
  @media screen and (max-width: 550px) {
    left: 15vw;
  }
  @media screen and (max-width: 1080px) {
    left: 20vw;
    top: 27.5vh;
    font-size: 3vh;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export const Icon = styled.i`
  transform: rotate(90deg);
  background-color: rgba(87, 116, 211, 0.5);
  border-radius: 10px;
  padding: 0.75rem;
`;

export const Curso1 = styled.span`
  position: absolute;
  width: 20vw;
  height: 15vh;
  top: 10vh;
  left: 2vw;
  border: 0 solid rgba(17, 73, 156, 0.8);
  border-left-width: 0.7rem;
  border-radius: 0.25rem;
  border-left-color: rgba(17, 73, 156, 0.8);
  box-shadow: 0px 3px 15px 0px rgba(17, 73, 156, 0.6);
  @media screen and (max-width: 1080px) {
    width: 35vw;
    top: 8vh;
  }
  @media screen and (max-width: 550px) {
    width: 45vw;
  }
`;

export const Curso2 = styled.span`
  position: absolute;
  width: 20vw;
  height: 15vh;
  bottom: 12vh;
  left: 2vw;
  border: 0 solid rgba(33, 151, 22, 0.8);
  border-left-width: 0.7rem;
  border-radius: 0.25rem;
  border-left-color: rgba(33, 151, 22, 0.8);
  box-shadow: 0px 3px 15px 0px rgba(33, 151, 22, 0.6);
  @media screen and (max-width: 1080px) {
    width: 35vw;
    bottom: 8vh;
  }
  @media screen and (max-width: 550px) {
    width: 45vw;
  }
`;

export default Button;
