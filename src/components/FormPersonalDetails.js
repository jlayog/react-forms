import { ThemeProvider } from '@mui/system';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { FormControl } from '@mui/material';

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

const FormPersonalDetails = (props) => {
  const handleContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  }

  const handlePrev = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <h2>Enter Personal Details</h2>
        </AppBar>
        <Container 
          sx={{
            '& .MuiTextField-root': { m: 1, mt: 4},
            '& .MuiInput-underline': { mr: 10}
          }} 
          spacing={5} 
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            helperText="Enter Your Occupation"
            label="Occupation"
            onChange={(e) => props.handleChange('Occupation', e.target.value)}
            defaultValue={props.allInputs.occupation}
            variant="standard"
          />
          <TextField
            helperText="Enter Your City"
            label="City"
            onChange={(e) => props.handleChange('city', e.target.value)}
            defaultValue={props.allInputs.city}
            variant="standard"
          />
          <br/>
          <FormControl fullWidth sx={{ width:"70ch" }} variant="standard">
            <TextField
              helperText="Enter Your Bio"
              label="Bio"
              onChange={(e) => props.handleChange('bio', e.target.value)}
              defaultValue={props.allInputs.bio}
              multiline
              rows={6}
            />
          </FormControl>
          <br/>
          <Button 
            onClick={handlePrev}
            variant="contained"
            sx={{
              mt: 2,
              mr: 8
            }}
          >
            Back
          </Button>
          <Button 
            onClick={handleContinue}
            variant="contained"
            sx={{
              mt: 2
            }}
          >
            Continue
          </Button>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default FormPersonalDetails;