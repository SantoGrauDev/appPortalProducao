import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";

import { Typewriter } from "react-simple-typewriter";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Oops, alguma coisa deu errado");
    }
    setLoading(false);
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "linear-gradient(180deg, #803ca8, #fc6a03)",
            //backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            // t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            //backgroundColor: '#4c00b0',
          }}
        >
          <h1 style={{ margin: "34% 0 0 0", fontWeight: "normal" }}>
            Ser Santo Grau é{" "}
            <span style={{ color: "#FFA701", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Honestidade",
                  "Lealdade",
                  "Observância da Lei",
                  "Responsabilidade!",
                  "Justiça",
                  "Idoneidade",
                  "Bom senso",
                ]}
                loop={5000}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <h4
            style={{
              float: "right",
              paddingTop: "14rem",
              margin: "auto 5px 0 ",
              fontWeight: "normal",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Bem vindo!</span>

            <br />

            <span style={{ fontWeight: "bold" }}>
              Vamos transformar nossas vendas em felicidade!
            </span>
          </h4>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button
                disabled={loading}
                type="submit"
                variant="contained"
                className="w-100 mt-2"
              >
                Entrar
              </Button>
            </Form>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Esqueceu a senha?</Link>
            </div>

            <img
              alt="logo"
              src="./Image/LOGO1.png"
              style={{ margin: "29px 0 0 0", width: "300px", height: "150px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
