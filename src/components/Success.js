import { AppBar, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

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

const Success = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <h2>Success</h2>
        </AppBar>
        <h2>Thank you for your submission.</h2>
        <p>You will get an email for validation and further instructions.</p>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Success