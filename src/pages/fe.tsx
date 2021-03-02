import { Container, List, Sidebar, Navbar } from "../client/styles/styles";

const Fe = () => {
  {
    document.title = "Front-End Playground";
  }
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <List />
    </Container>
  );
};

export default Fe;
