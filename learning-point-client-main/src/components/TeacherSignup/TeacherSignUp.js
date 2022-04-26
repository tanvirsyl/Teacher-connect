import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from '../Shared/Navigation/Navigation';
import { useHistory, useLocation } from 'react-router-dom';
import './TeacherSignup.css';
import { PhotoCamera } from '@material-ui/icons';

const theme = createTheme();

const TeacherSignup = () => {
  const [image, setImage] = React.useState("")
  const history = useHistory();

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'dyinef2d')

    return fetch('https://api.cloudinary.com/v1_1/nabihamaher/image/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => setImage(data.url))
  }
  console.log('image', image);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const qualification = data.get('qualification');
    const subject = data.get('subject');
    const charge = data.get('charge');
    const time = data.get('time');
    const contact = data.get('contact');
    const password = data.get('password');

    const user = {
      firstName, lastName, email, password, qualification, subject, charge, time, contact, role: "teacher", profilePicture: image
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
    <div className="container-teacher">
      <Navigation />
      <ThemeProvider theme={ theme }>
        <div component="main" maxWidth="l">
          <CssBaseline />
          <Box
            sx={ {
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            } }
          >
            <Avatar sx={ { m: 1, bgcolor: '#1dbf73' } }>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Teacher Sign up
            </Typography>
            <Box className="ml-md-5 mr-md-5" component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 3 } }>
              <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } sm={ 4 }>
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
                <Grid item xs={ 12 } sm={ 4 }>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={ 12 } sm={ 4 }>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <TextField
                    required
                    fullWidth
                    id="qualification"
                    label="Qualification"
                    name="qualification"
                    autoComplete="qualification"
                  />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <TextField required
                    fullWidth
                    id="subject"
                    label="Which Subject Do You Want to Teach?"
                    name="subject"
                    autoComplete="subject"
                    select>
                    <MenuItem value="Physics" >Physics</MenuItem>
                    <MenuItem value="Chemistry">Chemistry</MenuItem>
                    <MenuItem value="Higher-Math">Higher Math</MenuItem>
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="General-Math">General Math</MenuItem>
                    <MenuItem value="General-Science">General Science</MenuItem>
                    <MenuItem value="ICT">ICT</MenuItem>
                    <MenuItem value="Economics">Economics</MenuItem>
                    <MenuItem value="Accounting">Accounting</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="History">History</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Geology">Geology</MenuItem>
                    <MenuItem value="Civics">Civics</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <TextField
                    required
                    fullWidth
                    id="charge"
                    label="Charge Per Lecture(in Taka)"
                    name="charge"
                    autoComplete="charge"
                  />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <TextField
                    required
                    fullWidth
                    id="time"
                    label="Available Time"
                    defaultValue="10:00"
                    name="time"
                    type="time"
                    autoComplete="time"
                  />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <TextField
                    required
                    fullWidth
                    id="contact"
                    label="Contact Number"
                    name="contact"
                    autoComplete="contact"
                  />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
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
                <Grid item xs={ 12 } sm={ 6 }>
                  <PhotoCamera className="camera" />
                  <Button
                    containerElement='label'
                    label='My Label'>
                    <input type="file" onChange={ (e) => {
                      uploadImage(e.target.files)
                    } } />
                  </Button>
                </Grid>
              </Grid>
              { image.length > 0 ? <Button
                style={ { margin: '30px auto 10px', display: "flex", width: " 300px" } }
                type="submit"
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
              >
                Sign Up
              </Button> : '' }
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

export default TeacherSignup;