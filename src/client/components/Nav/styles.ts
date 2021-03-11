import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 1rem;
  font-size: 1rem;
  background: rgb(117, 180, 255);
  background: linear-gradient(
    90deg,
    rgba(117, 180, 255, 1) 0%,
    rgba(230, 96, 124, 1) 50%,
    rgba(157, 255, 65, 1) 100%
  );
`;

export const StyledNavMenu = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  letter-spacing: 5px;
`;

export const StyledMenuHamb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  letter-spacing: 5px;
`;

export const StyledLogo = styled.div`
  padding: 0.3rem;
`;

export const StyledButton = styled.li`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const StyledBtn = styled.a`
  text-decoration: none;
  letter-spacing: 2px;
`;

export const Btn = styled.a`
  text-decoration: none;
  letter-spacing: 2px;
`;
