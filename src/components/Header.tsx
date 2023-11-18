import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

type Props = {
    username: string
}

export default function Header({username}:Props) {

    return (
        <Navbar expand="lg" className="bg-body-dark" >
            <Container>
                <Navbar.Brand as={Link} to="home">REACT TO DO LIST | {username? username : " New User"} </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="home">Home</Nav.Link>
                    <Nav.Link as={Link} to="tasks">Tasks</Nav.Link>
                    {/* <Nav.Link as={Link} href="logout">Logout</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    );
}