import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import { Container, Row, Col } from 'react-bootstrap';

const LoginScreen = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{height: '100vh'}}>
                <Col md={8} lg={6}>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginScreen;
