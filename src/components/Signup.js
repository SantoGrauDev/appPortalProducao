import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
//import { useNavigate } from 'react-router-dom'
import Barralateral from "../components/pages/Sidebar";
import "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate()

  async function handleSubmit(e) {
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Senhas não são iguais");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      //navigate('/home')
    } catch {
      setError("Falha em criar conta");
    }
    setLoading(false);
  }

  return (
    <>
      <Barralateral>
        <div>
          <div className="container">
            <div className="row justify- -center align-items-center vh-100">
              <div className="col-auto">
                <Container className="d-flex align-items-center justify-contenter-center">
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                      <Card.Body>
                        <h2 className="text-center mb-4">Registrar</h2>

                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form onSubmit={handleSubmit}>
                          <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              ref={emailRef}
                              required
                            />
                          </Form.Group>
                          <Form.Group id="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                              type="password"
                              ref={passwordRef}
                              required
                            />
                          </Form.Group>
                          <Form.Group id="password-confirm">
                            <Form.Label>Confirmar senha</Form.Label>
                            <Form.Control
                              type="password"
                              ref={passwordConfirmRef}
                              required
                            />
                          </Form.Group>
                          <Button
                            disabled={loading}
                            type="submit"
                            className="w-100 mt-2"
                          >
                            Cadastrar
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </Barralateral>
    </>
  );
}
