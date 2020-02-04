import React from 'react'
import Footer from "../components/Register/Footer"

import Sidepanel from "../components/Register/SidePanel"
import Header  from "../components/Login/Header"
import {Tab,Nav} from "react-bootstrap"
import tractico from "../assets/dist/images/tractico.png"
import comregico from "../assets/dist/images/comregico.png"
import homeico from "../assets/dist/images/homeico.png"


export default function Login() {
    return (
        <>
           <Header/>
           <Tab.Container defaultActiveKey="Login">
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
            <Nav.Link eventKey="Login">
          <li className="nav-item active">
            <a className="nav-link redial-pin redial-relative px-0 rounded" data-toggle="tab" href="#left3" role="tab" aria-controls="left3" aria-expanded="true"> 
              <div className="media text-left pl-3">
                <div className="media-body redial-line-height-1_5">
                  <h6 className="mb-0 text-uppercase">Login</h6>
                  Login to your account
                </div>
              </div>
            </a>
          </li>
          </Nav.Link>
          </Nav.Item>
        </ul>
        </Nav>
      </div>
                          <div className="col-10 col-lg-9 nopad">
                            <Tab.Content>
                              <Tab.Pane eventKey="Login">
                              <div className="tab-pane fade loginrr active show" id="left3" role="tabpanel" aria-labelledby="left3" aria-expanded="true">
        <div className="col-12 col-sm-12 col-md-6 float-left nopad">
          <div className="row underlinebot linecoldark">
            <div className="col-12 col-sm-12">
              <h4 className="card-title float-left">Login</h4>
            </div>
          </div>
          <div className="col-12 col-sm-12 margtop5em">
            <div className="form">
              <div className="form-group">
                <label className="redial-font-weight-800">Username</label>
                <input type="text" className="form-control bg-transparent" placeholder />
                <small className="form-text">Only letters, numbers, and underscores are allowed.</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12">
            <div className="form">
              <div className="form-group">
                <label className="redial-font-weight-800">Password</label>
                <input type="password" className="form-control bg-transparent" placeholder />
                <small className="form-text">6-character minimum; case sensitive.</small>
              </div>
            </div>
          </div>
          <span className="rounded-0 float-left col-12 col-sm-6">
            <input type="radio" id="rem" name="test" />
            <label htmlFor="rem">remember me</label>
          </span>
          <div className="col-12 col-sm-12">
            <div className="form">
              <div className="form-group">
                <button className="btn btn-primary log btn-sm rounded-0 text-uppercase px-5 float-sm-left mt-sm-0 mt-3"> Login <i className="fa fa-long-arrow-right pl-2" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 card-body nopad helpr">
          <div className="row underlinebot linecoldark">
            <h4 className="card-title float-right pl-5">What we can do you for</h4>
          </div>
          <div className="col-12 col-sm-12 col-lg-12 card-body margtop5em float-left">
            <div className="col-12 col-sm-12 margtop2em">
              <div className="col-3 col-sm-3 float-left">
                <img src={comregico } alt=""/>
              </div>
              <p className="col-12 col-sm-12 col-md-12 col-lg-9 float-left"><b>PM:</b> Only letters, numbers,  and mangwashe za stackoverflow allowed.
              </p>
            </div>
            <div className="col-12 col-sm-12 margtop2em">
              <div className="col-3 col-sm-3 float-left">
                <img src={tractico} alt="" />
              </div>
              <p className="col-12 col-sm-12 col-md-12 col-lg-9 float-left"><b>PM:</b> Only letters, numbers,  and mangwashe za stackoverflow allowed.
              </p>
            </div>
            <div className="col-12 col-sm-12 margtop2em">
              <div className="col-3 col-sm-3 float-left">
                <img src={homeico} alt=""/>
              </div>
              <p className="col-12 col-sm-12 col-md-12 col-lg-9 float-left"><b>PM:</b> Only letters, numbers,  and mangwashe za stackoverflow allowed.
              </p>
            </div>
          </div>
        </div>
      </div>
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
            <Sidepanel/>
   
            <Footer/>
        </>
    )
}
