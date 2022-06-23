import { ThemeProvider } from '@emotion/react';
import React from 'react'
import Button from '@mui/material/Button';

const StepButton = (props) => {
    const handleContinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    
    const handlePrev = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return (
        <ThemeProvider>
            <Button 
            onClick={handleContinue}
            variant="contained"
            >
              Continue
            </Button>
            <Button 
            onClick={handlePrev}
            variant="contained"
            >
              Back
            </Button>
        </ThemeProvider>
    )
}

export default StepButton