import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 2rem;
  z-index: 1;
  top: 46.25%;
  left: 42.5%;
  display: flex;
  position: relative;
  border: 0;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export const Icon = styled.i`
  transform: rotate(90deg);
  background-color: rgba(87, 116, 211, 0.5);
  border-radius: 10px;
  padding: 0.5rem;
`;

export const Curso1 = styled.span`
  position: absolute;
  width: 80%;
  height: 25%;
  top: 17%;
  left: 10%;
  z-index: 2;
  border: 0 solid rgba(17, 73, 156, 0.8);
  border-left-width: 0.7rem;
  border-radius: 0.25rem;
  border-left-color: rgba(17, 73, 156, 0.8);
  box-shadow: 0px 3px 15px 0px rgba(17, 73, 156, 0.6);
`;

export const Curso2 = styled.span`
  position: absolute;
  width: 80%;
  height: 25%;
  bottom: 17%;
  left: 10%;
  z-index: 2;
  border: 0 solid rgba(33, 151, 22, 0.8);
  border-left-width: 0.7rem;
  border-radius: 0.25rem;
  border-left-color: rgba(33, 151, 22, 0.8);
  box-shadow: 0px 3px 15px 0px rgba(33, 151, 22, 0.6);
`;

export default Button;
