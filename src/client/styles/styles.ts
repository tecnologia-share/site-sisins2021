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
  height: 50%;
  overflow: auto;
  font-family: cursive; 
  left: 0.5%;
  top: 7%;
  border-radius: 0.5rem;
  z-index: 1;
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
`;
