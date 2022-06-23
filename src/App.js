import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Ian Sabado</Navbar.Brand>
    <Nav className="me-right">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  )
}



export default App;
