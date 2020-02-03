
import React from 'react'
import {Link} from "react-router-dom"
import {Tab,Nav,} from "react-bootstrap"
import Register from "./Register"

 function   Index() {


  return (

        <div id="content" className="align-content-center">
          <div className="row">
            <div className="col-12 col-sm-12">
              <div className="row mb-4">
                <div className="col-12 col-md-12 ">
                  <div className="card redial-border-light redial-shadow form-tab">
                    <div className="card-body shaperr">
                      <div className="row steprr" id="rootwizard">
                      <div className="col-2 col-lg-3 mb-4 mb-lg-0 nopad">
        <ul className="nav stepnav nav-fill flex-column contrls" id="myTab" role="tablist">
          <span className="next contsrr top" />
          <li className="nav-item active">
            <a className="nav-link redial-pin redial-relative px-0 rounded" data-toggle="tab" href="#left3" role="tab" aria-controls="left3" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="d-flex mr-3 align-self-center"><h1 className="mb-0 redial-font-weight-900">1</h1></div>
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Login</h6>
                  First time login
                </div>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link redial-pin redial-relative px-0 rounded" data-toggle="tab" href="#left4" role="tab" aria-controls="left4" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="d-flex mr-3 align-self-center"><h1 className="mb-0 redial-font-weight-900">2</h1></div>
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Account</h6>
                  Basic account info
                </div>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link redial-pin redial-relative px-0 rounded" data-toggle="tab" href="#left2" role="tab" aria-controls="left2" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="d-flex mr-3 align-self-center"><h1 className="mb-0 redial-font-weight-900">3</h1></div>
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Email Activation</h6>
                  Activation Method
                </div>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link redial-dark redial-relative px-0 rounded" data-toggle="tab" href="#left1" role="tab" aria-controls="left1" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="d-flex mr-3 align-self-center"><h1 className="mb-0 redial-font-weight-900">4</h1></div>
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Registration Details</h6>
                  Basic account info
                </div>
              </div>
            </a>
          </li>
          <ul className="pager wizard">
            <li className="previous"></li>
            <li className="next"></li>
          </ul>
        </ul>
      </div>
                          <div className="col-10 col-lg-9 nopad">
                            <Register/>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>       
   

)
}

export default Index 

 
       