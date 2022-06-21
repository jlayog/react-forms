import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
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
        <AppBar title="Enter User Details"/>
        <TextField
          helperText="Enter Your First Name"
          label="First Name"
          onChange={props.handleChange('firstName')}
          defaultValue={props.setAllInputs}
        />
        <br/>
        <TextField
          helperText="Enter Your Last Name"
          label="First Name"
          onChange={props.handleChange('firstName')}
          defaultValue={props.setAllInputs}
        />
        <br/>
        <TextField
          helperText="Enter Your First Name"
          label="First Name"
          onChange={props.handleChange('firstName')}
          defaultValue={props.setAllInputs}
        />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default FormUserDetails;