import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignIn.css'
import Navigation from '../Shared/Navigation/Navigation';
import { useHistory, useLocation } from 'react-router-dom';


const theme = createTheme();

export default function SignIn() {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get('email');
    const password = data.get('password')
    const user = {
      email, password
    }

    fetch('http://localhost:2000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const { token, user } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        history.replace(from);
        window.location.reload();

        if (data.status === 200) {
          const { token, user } = data;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          history.replace(from);
          history.push('/');
        } else {
          if (data.status === 400) {
            console.log(data.error);
          }
        }
      })
    e.target.reset();
  };

  return (
    <div className="container-full">
      <Navigation />
      <ThemeProvider theme={ theme }>
        <div component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={ {
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            } }
          >
            <Avatar sx={ { m: 1, bgcolor: '#1dbf73' } }>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/registration-student" variant="body2" style={{textDecoration: "none"}}>
                    { "Don't have an account? Sign Up" }
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </div>
  );
}