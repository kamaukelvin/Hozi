/* eslint-disable default-case */
import React,{useContext} from 'react'
import BasicInfo from "./BasicInfo"
import Activation from "./Activation"
import FinishUp from "./FinishUp"
import {RegisterContext} from "../../../Context/RegisterContext"

  
 function Register() {
 
    const context = useContext(RegisterContext)
    const {step}= context
    console.log(context)
    return (
      <div>
        {/* {(() => {
      switch (step) {
        case 1:
          return (
            <BasicInfo/>);
        case 2:
          return (
              <Activation/>
                    );
        case 3:
            return (
              <FinishUp/>
                );
        // default:
        // return null;
      }
    })()} */}
      </div>
    )
  }
  
  export default Register