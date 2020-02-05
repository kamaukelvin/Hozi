import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import {Tab,Nav,} from "react-bootstrap"
import comregico from "../../../assets/dist/images/comregico.png"
import {RegisterContext} from "../../../Context/RegisterContext"

export default function FinishUp() {
  const context = useContext(RegisterContext)
  const {setStep}= context


    return (
        <div>

            <div className="row ">
              <Tab.Container defaultActiveKey="company">
                                    <div className="col-12 col-sm-12">
                                      <h4 className="card-title">Complete Registration</h4>
                                      <p>Lorem: ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip unga ya jogoo.</p>
                                    </div>

                                    
                                    <div className="custom-tabs2 margtopbot3em comregrr">
                                    <Nav className="m-0">

                                      <ul className="nav nav-tabs flex-column flex-md-row nomargtop" id="myTab" role="tablist">
                                      <Nav.Item>
                                  <Nav.Link eventKey="company">
                                    
                                          
                                            <input type="radio" id="company" name="test" />
                                            <label htmlFor="company">Company</label>
                                          <div className="tabcontent"><Link className="nav-link redial-light rounded-0" data-toggle="tab" href="#tab1" role="tab" aria-selected="true" aria-expanded="false">
                                            </Link>
                                          </div>
                                          </Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                  <Nav.Link eventKey="single-entity">
                                            <input type="radio" id="se" name="test" />
                                            <label htmlFor="se">Single Entity</label>
                                      
                                      </Nav.Link>

                                      </Nav.Item>
                                      </ul>
                                      </Nav>
                                      <Tab.Content>
                                        <Tab.Pane eventKey="company">
                                    
                                          <div className="card-body">
                                            <div className="col-12 col-sm-12 col-lg-12 float-left">
                                              <div className="comreg">
                                                <img src={comregico} alt="" />
                                                <h6 className="header-title pl-3 redial-relative">Company Registration</h6>
                                                <div className="custom-file">
                                                  <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                                  <label className="custom-file-label" htmlFor="inputGroupFile01">Add Co. Logo</label>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                              <div className="form">
                                                <div className="form-group">
                                                  <label className="redial-font-weight-800 redial-dark">Company Name</label>
                                                  <input type="text" className="form-control bg-transparent" placeholder />
                                                  <small className="form-text">Only letters, numbers, and underscores are allowed.</small>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                              <div className="form">
                                                <div className="form-group">
                                                  <label className="redial-font-weight-800 redial-dark">Email address</label>
                                                  <input type="text" className="form-control bg-transparent" placeholder />
                                                  <small className="form-text">You will occasionally receive account related emails.</small>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                              <div className="form">
                                                <div className="form-group">
                                                  <label className="redial-font-weight-800 redial-dark">Contact</label>
                                                  <input type="password" className="form-control bg-transparent" placeholder />
                                                  <small className="form-text">6-character minimum; case sensitive.</small>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                              <div className="form">
                                                <div className="form-group">
                                                  <label className="redial-font-weight-800 redial-dark">Area</label>
                                                  <input type="password" className="form-control bg-transparent" placeholder />
                                                  <small className="form-text">Some area code.</small>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                        <div className="form">
                                          <div className="form-group">
                                            <label className="redial-font-weight-800 redial-dark">Password</label>
                                            <input type="password" className="form-control bg-transparent" placeholder />
                                            <small className="form-text">6-character minimum; case sensitive.</small>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-6">
                                        <div className="form">
                                          <div className="form-group">
                                            <label className="redial-font-weight-800 redial-dark">Confirm - Password</label>
                                            <input type="password" className="form-control bg-transparent" placeholder />
                                            <small className="form-text">6-character minimum; case sensitive.</small>
                                          </div>
                                        </div>
                                      </div> 
                                            </div>
                                    
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="single-entity">
                                           
                                              <div className="card-body">
                                                <div className="col-12 col-sm-12 col-lg-12 float-left">
                                                  <div className="comreg">
                                                    <img src={comregico} alt="" />
                                                    <h6 className="header-title pl-3 redial-relative">Entity Registration</h6>
                                                    <div className="custom-file">
                                                      <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                                      <label className="custom-file-label" htmlFor="inputGroupFile01">Add Entity Logo</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                  <div className="form">
                                                    <div className="form-group">
                                                      <label className="redial-font-weight-800 redial-dark">Entity Name</label>
                                                      <input type="text" className="form-control bg-transparent" placeholder />
                                                      <small className="form-text">Only letters, numbers, and underscores are allowed.</small>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                  <div className="form">
                                                    <div className="form-group">
                                                      <label className="redial-font-weight-800 redial-dark">Email address</label>
                                                      <input type="text" className="form-control bg-transparent" placeholder />
                                                      <small className="form-text">You will occasionally receive account related emails.</small>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                  <div className="form">
                                                    <div className="form-group">
                                                      <label className="redial-font-weight-800 redial-dark">Contact</label>
                                                      <input type="password" className="form-control bg-transparent" placeholder />
                                                      <small className="form-text">6-character minimum; case sensitive.</small>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                  <div className="form">
                                                    <div className="form-group">
                                                      <label className="redial-font-weight-800 redial-dark">Area</label>
                                                      <input type="password" className="form-control bg-transparent" placeholder />
                                                      <small className="form-text">Some area code.</small>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                        <div className="form">
                                          <div className="form-group">
                                            <label className="redial-font-weight-800 redial-dark">Password</label>
                                            <input type="password" className="form-control bg-transparent" placeholder />
                                            <small className="form-text">6-character minimum; case sensitive.</small>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-6">
                                        <div className="form">
                                          <div className="form-group">
                                            <label className="redial-font-weight-800 redial-dark">Confirm - Password</label>
                                            <input type="password" className="form-control bg-transparent" placeholder />
                                            <small className="form-text">6-character minimum; case sensitive.</small>
                                          </div>
                                        </div>
                                      </div> 
                                              </div>
                                          
                                            </Tab.Pane> 
                                    </Tab.Content>
                                    <div className="col-12 col-sm-12">
                    
                                      <div className="col-12 col-sm-6 col-xl-4 mb-4 mb-xl-0">
                                        <div className="pricing-table text-center border redial-shadow">
                                          <span id="div1" className="hidrr badge badge-light">
                                            <span className="ti-check pr-2" />
                                          </span>
                                          <div className="py-4">
                                            <h6 className="mb-0">BASIC PLAN</h6>
                                          </div>
                                          <div className="price-header2 redial-dark redial-font-weight-700 redial-bg-secondry"><h1 className="mb-0"><sup>$</sup> 19</h1></div>
                                          <ul className="list-unstyled mb-0 py-4 redial-line-height-1">
                                            <li className="py-2">50 Agents Accounts</li>
                                            <li className="py-2">15 Units</li>
                                            <li className="py-2"><em>24/7</em> Support</li>
                                          </ul>
                                          <Link href="#" className="rounded-0 float-right">
                                            <input type="radio" id="basic" name="tab"  />
                                            <label htmlFor="basic" />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-6 col-xl-4 mb-4 mb-xl-0">
                                        <div className="pricing-table text-center border redial-shadow">
                                          <span id="div2" className="hidrr badge badge-light">
                                            <span className="ti-check pr-2" />
                                          </span>
                                          <div className="py-4">
                                            <h6 className="mb-0">STANDARD PLAN</h6>
                                          </div>
                                          <div className="price-header2 redial-dark redial-font-weight-700 redial-bg-secondry"><h1 className="mb-0"><sup>$</sup> 29</h1></div>
                                          <ul className="list-unstyled mb-0 py-4 redial-line-height-1">
                                            <li className="py-2">50 Agents Accounts</li>
                                            <li className="py-2">15 Units</li>
                                            <li className="py-2"><em>24/7</em> Support</li>
                                          </ul>
                                          <Link href="#" className="rounded-0 float-right">
                                            <input type="radio" id="std" name="tab"  />
                                            <label htmlFor="std" />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-6 col-xl-4">
                                        <div className="pricing-table text-center border redial-shadow">
                                          <span id="div3" className="hidrr badge badge-light">
                                            <span className="ti-check pr-2" />
                                          </span>
                                          <div className="py-4">
                                            <h6 className="mb-0">PREMIUM PLAN</h6>
                                          </div>
                                          <div className="price-header2 redial-dark redial-font-weight-700 redial-bg-secondry"><h1 className="mb-0"><sup>$</sup> 30</h1></div>
                                          <ul className="list-unstyled mb-0 py-4 redial-line-height-1">
                                            <li className="py-2">50 Agents Accounts</li>
                                            <li className="py-2">15 Units</li>
                                            <li className="py-2"><em>24/7</em> Support</li>
                                          </ul>
                                          <Link href="#" className="rounded-0 float-right">
                                            <input type="radio" id="prem" name="tab" onclick="show3();" />
                                            <label htmlFor="prem" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div> 
                                  </div>
                                  </Tab.Container>
                                  </div>
                                  <ul className="pager wizard">
                                <li className="next btn btn-primary btn-sm  text-uppercase px-5 float-sm-left mt-sm-0 mt-3" onClick={()=>setStep(2)} >Back</li>
                                <li className="next btn btn-primary btn-sm  text-uppercase px-5 float-sm-right mt-sm-0 mt-3" >Next</li>
                              </ul>
       
        </div>
    )
}
