import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type Props = {
    username: string
}

export default function Header({username}:Props) {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">React To Do List | {username? username : " New User"}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {/* <Nav.Link href="#features">Tasks</Nav.Link>
                    <Nav.Link href="#pricing">Logout</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    );
}