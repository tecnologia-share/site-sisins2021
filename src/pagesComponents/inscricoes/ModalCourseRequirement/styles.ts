import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.9375rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 31.25rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  margin-right: 2.5rem;
`;

export const ModalText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CloseModalIcon = styled(SVG)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 1.5rem;
  width: 1.5rem;

  path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const LogoModal = styled(SVG)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 3rem;
  width: 3rem;
`;
