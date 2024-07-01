import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="logo-2.png" height="50" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Courses</Nav.Link>
            <NavDropdown title="Working On" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Development Work</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Career</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
          <Button variant="primary">Login/Register</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
