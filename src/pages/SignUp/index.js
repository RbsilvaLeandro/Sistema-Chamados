
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../SignUp/SignUp.css';

import { Form, Button, Container, Col, Row, Image } from 'react-bootstrap';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('CLICOU')
  }

  return (
    <Container>
      <Row className="DivContentRegister">
        <Col sm></Col>
        <Col xs={12} lg={4}>
          <div>
            <div className="DivLogoRegister">
              <img src={logo} alt="logo" className="imgLogoRegister" />
            </div>
            <div className="DivfieldsRegister">

              <Form.Group className="mb-3">
                <div className="d-grid gap-2">
                  <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                </div>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button className="btnLoginRegister">
                  Login
                </Button>
                <Button className="btnRegisterRegister">
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


export default SignUp;
