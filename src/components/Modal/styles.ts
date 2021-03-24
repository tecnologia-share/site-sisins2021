import styled from 'styled-components';

export const Overlay = styled.div`
  z-index: 20;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.grays[7]};
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
