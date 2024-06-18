import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navtab() {
    return ( 

    <Navbar expand="lg" className={'bg-secondary text-light'}>
      <Container fluid>
        <Navbar.Brand className={'text-light'} href="#home">Start Bootstrap</Navbar.Brand>
        <div className='d-flex gap-2'>
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link to="#about">About</Nav.Link>
            <Nav.Link to="#services">Services</Nav.Link>
            <Nav.Link to="#contact">Contact</Nav.Link>
        </div>
      </Container>
    </Navbar>
     );
}

export default Navtab;