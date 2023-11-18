import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


export default function Header() {

    return (
        <Navbar expand="lg" variant='dark' className="bg-body-dark" >
            <Container>
                <Navbar.Brand as={Link} to="/">REACT TO DO LIST</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="home">Home</Nav.Link>
                    <Nav.Link as={Link} to="tasks">Tasks</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}