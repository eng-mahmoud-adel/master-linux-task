import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth.action';

const BaseNavbar = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Exam</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Exam</Nav.Link>
                    <Nav.Link as={Link} to="/result">Result</Nav.Link>
                    <Nav.Link as={Button} variant="dark" onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BaseNavbar;
