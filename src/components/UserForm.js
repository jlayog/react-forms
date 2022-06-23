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
  
  const handleChange = (propertyName, value) => {
    setAllInputs( prevInputs => {
      return { ...prevInputs, [propertyName]: value }
    })
  }

  switch(step) {
    case 1:
      return (
        <div>
          <FormUserDetails 
            nextStep={nextStep}
            handleChange={handleChange}
            allInputs={allInputs}
          />
        </div>
      );
    case 2: 
      return (
        <div>
          <FormPersonalDetails 
            nextStep={nextStep}
            handleChange={handleChange}
            allInputs={allInputs}
            prevStep={prevStep}
          />
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