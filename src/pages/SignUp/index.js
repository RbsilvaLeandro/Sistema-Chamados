
import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import '../SignUp/SignUp.css';
import { AuthContext } from '../../context/auth';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== '' && email !== '' && password !== '') {
      signUp(email,password,name);      
    }
  }

  return (
    <Container>
      <Row className="DivContentRegister">
        <Col></Col>
        <Col xs={12} sm={12} md={8} lg={4}>
          <div>
            <div className="DivLogoRegister">
              <img src={logo} alt="logo" className="imgLogoRegister" />
            </div>
            <div className="DivfieldsRegister">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <div className="d-grid gap-2">
                    <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                  </div>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button className="btnLoginRegister" type="submit">
                    {loadingAuth ? 'Loading...' : 'Register'}
                  </Button>
                  <Button className="btnRegisterRegister">
                    <a href="/" className="LinkCancel">
                      Cancel
                    </a>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container >

  );
}


export default SignUp;
