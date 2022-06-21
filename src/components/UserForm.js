import React, { useEffect, useState } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [allInputs, setAllInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  });

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }
  
  const handleChange = (e) => {
    setAllInputs( prevInputs => {
      return { ...prevInputs, [e.target.name]: e.target.value }
    })
  }

  switch(step) {
    case 1:
      return (
        <div>
          <FormUserDetails 
          nextStep={nextStep}
          handleChange={handleChange}
          setAllInputs={setAllInputs}
          />
        </div>
      );
    case 2: 
      return (
        <div>
          <FormPersonalDetails />
        </div>
      );
    case 3: 
      return (
        <div>
          <Confirm />
        </div>
        
      );
    default: 
      return (
        <div>
          <Success />
        </div>
        
      );   
    }
}


export default UserForm;