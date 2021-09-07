
import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import '../SignIn/SignIn.css';
import { AuthContext } from '../../context/auth';


import { Form, Button, Container, Col, Row } from 'react-bootstrap';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      signIn(email, password)
    }
  }

  return (
    <Container>
      <Row className="DivContent">
        <Col></Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <div>
            <div className="DivLogo">
              <img src={logo} alt="logo" className="imgLogo" />
            </div>
            <div className="Divfields">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <div className="d-grid gap-2">
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                  </div>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button className="btnLogin" type="submit">
                    {loadingAuth ? 'Loading...' : 'Login'}
                  </Button>
                  <Button className="btnRegister">
                    <a href="/register" className="LinkRegister">
                      Register
                    </a>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default SignIn;
