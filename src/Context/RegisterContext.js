import React, {useState,createContext} from 'react'

const RegisterContext= createContext()
const RegisterContextProvider =(props)=>{


    const [step, setStep] = useState(1);
    
      // Proceed to next step
      const nextStep = () => {
        setStep(step + 1);
      };
    
      // Go back to prev step
     const  prevStep = () => {
      
        setStep(step - 1);
      };
    





return (
        <RegisterContext.Provider value={{step,setStep,nextStep,prevStep}}>
            {props.children}
        </RegisterContext.Provider>
    )
 }

const RegisterConsumer = RegisterContext.Consumer;
export {RegisterContextProvider,RegisterConsumer, RegisterContext}
