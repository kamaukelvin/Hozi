
import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {Tab,Nav,} from "react-bootstrap"
import Register from "./Register"
import Activation from './Activation'
import FinishUp from './FinishUp'
import BasicInfo from './BasicInfo'

 function   Index() {
   const [currentTab, setCurrentTab]= useState(1)
const handleSelect=(key)=>{
  setCurrentTab(2)
}
const nextStep=()=>{
setCurrentTab({
  currentTab: currentTab + 1
})
}
  return (
    <Tab.Container defaultActiveKey={currentTab}>

        <div id="content" className="align-content-center">
          <div className="row">
            <div className="col-12 col-sm-12">
              <div className="row mb-4">
                <div className="col-12 col-md-12 ">
                  <div className="card redial-border-light redial-shadow form-tab">
                    <div className="card-body shaperr">
                      <div className="row steprr" id="rootwizard">
                      <div className="col-2 col-lg-3 mb-4 mb-lg-0 nopad">
                      <Nav className="m-0">
        <ul className="nav stepnav nav-fill flex-column contrls" id="myTab" role="tablist">
          <span className="next contsrr top" />
  
          <Nav.Item>
            <Nav.Link eventKey={1}>
          <li className="nav-item">
            <a className="nav-link redial-pin redial-relative px-0 rounded" data-toggle="tab" href="#left4" role="tab" aria-controls="left4" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="d-flex mr-3 align-self-center"><h1 className="mb-0 redial-font-weight-900">1</h1></div>
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Account</h6>
                  Basic account info
                </div>
              </div>
            </a>
          </li>
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={2}>
          <li className="nav-item">
            <a className="nav-link redial-pin redial-relative px-0 rounded" data-toggle="tab" href="#left2" role="tab" aria-controls="left2" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="d-flex mr-3 align-self-center"><h1 className="mb-0 redial-font-weight-900">2</h1></div>
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Email Activation</h6>
                  Activation Method
                </div>
              </div>
            </a>
          </li>
        
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey={3}>
          <li className="nav-item">
            <a className="nav-link redial-dark redial-relative px-0 rounded" data-toggle="tab" href="#left1" role="tab" aria-controls="left1" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="d-flex mr-3 align-self-center"><h1 className="mb-0 redial-font-weight-900">3</h1></div>
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Registration Details</h6>
                  Basic account info
                </div>
              </div>
            </a>
          </li>
         </Nav.Link>
         </Nav.Item>
          <ul className="pager wizard">
            <li className="previous" onClick={()=>nextStep()}></li>
            <li className="next"></li>
          </ul>
        </ul>
        </Nav>
      </div>
                          <div className="col-10 col-lg-9 nopad">
                            <Tab.Content >
                              <Tab.Pane eventKey={1}>
                                <BasicInfo changeTab={handleSelect}/>
                              </Tab.Pane>
                              <Tab.Pane eventKey={2}>
                                <Activation/>
                              </Tab.Pane>
                              <Tab.Pane eventKey={3}>
                                <FinishUp/>
                              </Tab.Pane>
                          
                            </Tab.Content>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
          </Tab.Container>     
   

)
}

export default Index 

 
       