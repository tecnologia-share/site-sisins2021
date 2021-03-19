import styled from 'styled-components';

export const StyledNav = styled.nav.attrs((props) => ({
  className: (props.className = 'navbar'),
}))`
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 1rem;
  font-size: 1rem;
  background: #ffffff;
  width: 100%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledNavMenu = styled.section`
  align-items: center;
  height: 100%;
`;

export const StyledMenuHamb = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledLogo = styled.div`
  margin-top: 0.2rem;
`;

export const StyledButton = styled.li`
  list-style-type: none;
`;

export const StyledBtn = styled.a`
  text-decoration: none;
  letter-spacing: 1px;
  color: #000000;
  font-family: Lato;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 1.2rem;
`;
export const Login = styled.div`
  display: flex;
  padding-top: 3px;
`;

export const Btn = styled.div`
  text-decoration: none;
  letter-spacing: 2px;
`;
