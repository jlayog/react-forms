import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

// Let's destructure the state passed to this component
const FormUserDetails = (props) => {
  const handleContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  }
  
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {/* AppBar does not take the   */}
        <AppBar position="static">
          <h2>Enter User Details</h2>
        </AppBar>
        <Container sx={{
          mt: 4,
        }} spacing={5} >
          <TextField
            helperText="Enter Your First Name"
            label="First Name"
            onChange={(e) => props.handleChange('firstName', e.target.value)}
            defaultValue={props.allInputs.firstName}
            sx={{
              m: 1
            }}
          />
          <br/>
          <TextField
            helperText="Enter Your Last Name"
            label="Last Name"
            onChange={(e) => props.handleChange('lastName', e.target.value)}
            defaultValue={props.allInputs.lastName}
            sx={{
              m: 1
            }}
          />
          <br/>
          <TextField
            helperText="Enter Your Email"
            label="Email"
            onChange={(e) => props.handleChange('email', e.target.value)}
            defaultValue={props.allInputs.email}
            sx={{
              m: 1
            }}
          />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default FormUserDetails;