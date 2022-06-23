import { List, ListItem, AppBar, Container, ThemeProvider, Button, Typography, createTheme, ListItemText } from '@mui/material'
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

const Confirm = (props) => {
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
        {/* AppBar must have content within it to display */}
        <AppBar position="static">
          <h2>Confirm User Data</h2>
        </AppBar>
        <Container sx={{
          mt: 4,
        }} spacing={5} 
        > 
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Is this information correct?
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={props.allInputs.firstName}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Last Name"
                secondary={props.allInputs.lastName}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Email"
                secondary={props.allInputs.email}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Occupation"
                secondary={props.allInputs.occupation}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="City"
                secondary={props.allInputs.city}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bio"
                secondary={props.allInputs.bio}
              />
            </ListItem>
          </List>
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
              Confirm & Continue
          </Button>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Confirm