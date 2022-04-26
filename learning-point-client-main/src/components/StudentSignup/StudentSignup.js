import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './StudentSignup.css';
import Navigation from '../Shared/Navigation/Navigation';
import { useHistory, useLocation } from 'react-router-dom';

const theme = createTheme();

const StudentSignup = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const password = data.get('password');
    // const qualification = data.get('qualification');
    // const subject = data.get('subject');
    // const charge = data.get('charge');
    // const time = data.get('time');

    const user = {
      firstName, lastName, email, password, role: "student"
    }

    console.log(user);
    fetch('http://localhost:2000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      alert('Success');
      history.push('/');

      if (data.status === 200) {
        alert('Success');
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
    <div className="container-std">
    <Navigation/>
    <ThemeProvider theme={theme}>
    <div component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1dbf73' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Student Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/log-in" variant="body2" style={{textDecoration: "none"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  </ThemeProvider>
  </div>
  );
};

export default StudentSignup;