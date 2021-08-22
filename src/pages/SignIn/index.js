
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../SignIn/SignIn.css';

import { Form, Button, Container, Col, Row, Image } from 'react-bootstrap';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('CLICOU')
  }

  return (
    <Container>
      <Row className="DivContent">
        <Col sm></Col>
        <Col xs={12} lg={4}>
          <div>
            <div className="DivLogo">
              <img src={logo} alt="logo" className="imgLogo" />
            </div>
            <div className="Divfields">

              <Form.Group className="mb-3">
                <div className="d-grid gap-2">
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                </div>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button className="btnLogin">
                  Login
                </Button>
                <Button className="btnRegister">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col sm></Col>
      </Row>
    </Container >

  );
}

export default SignIn;
