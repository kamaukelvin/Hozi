import React, {useState,createContext} from 'react'
const RegisterContext= createContext()
const RegisterContextProvider =(props)=>{




const [currentTab, setCurrentTab]= useState({key:1})



// methods here
const handleSelect=(key)=>{

  
}

 // Proceed to next step
 const nextStep = () => {
    const { key } = currentTab;
    setCurrentTab({
      key: key + 1,
    
    });
    console.log("next is clicked",currentTab)
  };

  // Go back to prev step
  const prevStep = () => {
    const { key } = currentTab;
    setCurrentTab({
      key: key - 1
    });
    console.log(currentTab)
  };




return (
        <RegisterContext.Provider value={{currentTab,setCurrentTab, nextStep,prevStep}}>
            {props.children}
        </RegisterContext.Provider>
    )
 }

const RegisterConsumer = RegisterContext.Consumer;
export {RegisterContextProvider,RegisterConsumer, RegisterContext}