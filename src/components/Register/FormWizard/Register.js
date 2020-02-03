/* eslint-disable default-case */
import React,{Component} from 'react'
import BasicInfo from "./BasicInfo"
import Activation from "./Activation"
import FinishUp from "./FinishUp"

export class Register extends Component {
    state = {
      step: 1,
      
    };
  
    // Proceed to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };
  
    // Go back to prev step
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };
  

  
    render() {
      const { step } = this.state;
 
   
  
      switch (step) {
        case 1:
          return (
            <BasicInfo
              nextStep={this.nextStep}
              handleChange={this.handleChange}
             
            />
          );
        case 2:
          return (
            <Activation
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            
            />
          );
        case 3:
          return (
            <FinishUp
              nextStep={this.nextStep}
              prevStep={this.prevStep}
         
            />
          );
     
      }
    }
  }
  
  export default Register;