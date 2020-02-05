import React,{useContext} from 'react'
import balloons from "../../../assets/dist/images/balloons.png"
import {RegisterContext} from "../../../Context/RegisterContext"


export default function Activation() {

  const context = useContext(RegisterContext)
  const {setStep, nextStep, prevStep}= context


    
    return (
        <div>
       
        <div className="row">
            <div className="col-12 col-sm-4">
              <img src={balloons} alt=""/>
            </div>
            <div className="col-12 col-sm-12">
              <h4 className="card-title">Almost Done!</h4>
              <p>Lorem: ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip unga ya jogoo.</p>
            </div>
            <div className="col-12 col-sm-6 margtopbot5em mailerr">
              <div className="meth">
                <div className="col-12 col-sm-12">
                  <div className="form">
                    <div className="form-group">
                      <label className="redial-font-weight-800">Activation Code</label>
                      <input type="text" className="form-control bg-transparent" placeholder />
                      <small className="form-text">Resend the Activation <code />?</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pager wizard">
  <button className="next btn btn-primary btn-sm  text-uppercase px-5 float-sm-right mt-sm-0 mt-3" onClick={nextStep}>Next</button>
  <button className="next btn btn-primary btn-sm  text-uppercase px-5 float-sm-left mt-sm-0 mt-3" onClick={prevStep}>Back</button>
</div>
                                    
        </div>
    )
}
