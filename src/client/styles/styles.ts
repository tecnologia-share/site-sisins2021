import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  position: fixed;
`;

export const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  width: 25vw;
  background-color: #ececec;
  position: fixed;
  height: 70vh;
  font-family: cursive; 
  left: 0.5vw;
  top: 7vh;
  border-radius: 0.5rem;
  z-index: 1;
  @media screen and (max-width: 1080px) {
    width: 40vw;
    height: 60vh;
  }
  @media screen and (max-width: 775px) {
    width: 40vw;
    height: 60vh;
  }
  @media screen and (max-width: 550px) {
    width: 50vw;
    height: 60vh;
  }
`;

export const List = styled.div`
  margin: 0;
  padding: 0;
  width: 77vw;
  background-color: #d4d4d4;
  position: fixed;
  height: 92vh;
  font-family: cursive;  
  top: 7vh;
  left: 22.5vw;
  border-radius: 0.5rem;
`;

export const Navbar = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #ececec;
  position: fixed;
  height: 6%;
  overflow: auto;
  font-family: cursive;  
  top: 0;
  left: 0;
  box-shadow: 0px 2px 6px 0px rgba(1,1,1,0.4);
`;

export const Title = styled.h1`
  color: rgba(5,1,5, 0.7);
`;