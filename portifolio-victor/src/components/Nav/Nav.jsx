import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareGithub } from "react-icons/fa6";
import '../Nav/Nav.css'

function NavMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Victor Del Greco</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="#deets"><PiInstagramLogoFill className='nav-icone-social-midia'/></Nav.Link>
            <Nav.Link href="#deets"><PiLinkedinLogoFill className='nav-icone-social-midia'/></Nav.Link>
            <Nav.Link href="#deets"><FaSquareGithub className='nav-icone-social-midia'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavMenu;