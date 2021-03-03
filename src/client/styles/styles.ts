import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  position: fixed;
  z-index: 0;
`;

export const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  width: 20%;
  background-color: #ececec;
  position: fixed;
  height: 70%;
  font-family: cursive; 
  left: 0.5%;
  top: 7%;
  border-radius: 0.5rem;
  z-index: 1;
  @media screen and (max-width: 1080px) {
    width: 35%;
    height: 60%;
  }
  @media screen and (max-width: 550px) {
    width: 50%;
    height: 50%;
  }
`;

export const List = styled.div`
  margin: 0;
  padding: 0;
  width: 80%;
  background-color: #d4d4d4;
  position: fixed;
  height: 94%;
  overflow: auto;
  font-family: cursive;  
  right: 0;
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
  z-index: 1;
  box-shadow: 0px 2px 6px 0px rgba(1,1,1,0.4);
`;

export const Title = styled.h1`
  color: rgba(5,1,5, 0.7);
`;