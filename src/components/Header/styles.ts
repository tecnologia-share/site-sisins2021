import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.blacks[0]};
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: 0 1rem;
  }
`;

export const Logo = styled(SVG)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  top: 50%;
  left: 50%;

  a:not(:first-child) {
    margin-left: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    a:not(:first-child) {
      margin-left: 1.5rem;
    }
  }
`;

interface NavButtonProps {
  active?: boolean;
}

export const NavButton = styled.a<NavButtonProps>`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-weight: bold;

  &::after {
    position: absolute;
    display: ${({ active }) => (active ? 'block' : 'none')};
    content: '';
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    top: 100%;
    margin-top: 4px;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const UserInfoContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserText = styled.div`
  margin-right: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

export const UserIcon = styled(SVG)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;

  path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const UserIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.grays[1]};
`;
