import styled from 'styled-components';

export const StyledNav = styled.nav.attrs((props) => ({
  className: (props.className = 'navbar'),
}))`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 1rem;
  font-size: 1rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  width: 100%;
`;

export const StyledNavMenu = styled.section`
  align-items: center;
  height: 100%;
  letter-spacing: 5px;
`;

export const StyledMenuHamb = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
  letter-spacing: 5px;
`;

export const StyledLogo = styled.div`
  padding: 0.3rem;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
`;

export const StyledButton = styled.li`
  list-style-type: none;
`;

export const StyledBtn = styled.a`
  text-decoration: none;
  letter-spacing: 2px;
  color: #333;
  font-family: Lato;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 1rem;
`;

export const Btn = styled.div`
  text-decoration: none;
  letter-spacing: 2px;
`;
