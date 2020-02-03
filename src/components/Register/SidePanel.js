import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import {ChatContext} from "../../Context/ChatContext"

 function SidePanel() {



    return (
        <div>
    <div id="sidechat">
        <Link to="#" className="setting text-center redial-bg-primary d-none d-lg-block"> 
          <h4 className="text-white mb-0"><i className="icofont icofont-gear" /></h4>
        </Link>
        <div className="sidbarchat">
          <ul className="nav nav-tabs border-0 justify-content-lg-center my-3 my-lg-0 flex-column flex-sm-row" role="tablist">
            <li className="nav-item">
              <Link className="nav-link redial-light border-top-0 border-left-0 border-right-0 active pt-0" id="11-tab" data-toggle="tab" to="#11" role="tab" aria-controls="home" aria-selected="true">Chat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link redial-light border-top-0 border-left-0 border-right-0 pt-0" id="21-tab" data-toggle="tab" to="#21" role="tab" aria-controls="profile" aria-selected="false">Todo</Link>
            </li>
          </ul>
          <div className="tab-content py-4" id="mysideTabContent">
            <div className="tab-pane fade show active" id={11} role="tabpanel" aria-labelledby="11-tab">
              <ul className="nav flex-column" role="tablist">
                <div className="col-12 col-xl-12">
                  <div className="card">
                    <div className="card-body py-5">
                      <div className="tab-content py-2" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                          <div className="scrollerchat">
                            <div className="media text-right in text-white w-100 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hello John, how can I help you today ?
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-100 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hi, I want to buy Link new shoes.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-100 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Shipment is free. You\'ll get your shoes tomorrow!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-100 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Wow that\'s great!
                              </div>
                            </div>
                            <div className="media text-right out w-100 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Ok. Thanks for the answer. Appreciated.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-100 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                You are welcome!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Type message here ..." />
                              </div>
                            </div>
                            <div className="col-12 col-sm-3">
                              <Link to="#" className="btn btn-primary btn-default btn-block mt-3 mt-sm-0">Send</Link>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab2" role="tabpanel">
                          <div className="scrollerchat">
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hello John, how can I help you today ?
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hi, I want to buy Link new shoes.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Shipment is free. You\'ll get your shoes tomorrow!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Wow that\'s great!
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Type message here ..." />
                              </div>
                            </div>
                            <div className="col-12 col-sm-3">
                              <Link to="#" className="btn btn-primary btn-default btn-block mt-3 mt-sm-0">Send</Link>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab3" role="tabpanel">
                          <div className="scrollerchat">
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hello John, how can I help you today ?
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hi, I want to buy Link new shoes.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Shipment is free. You\'ll get your shoes tomorrow!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Wow that\'s great!
                              </div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Ok. Thanks for the answer. Appreciated.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                You are welcome!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Type message here ..." />
                              </div>
                            </div>
                            <div className="col-12 col-sm-3">
                              <Link to="#" className="btn btn-primary btn-default btn-block mt-3 mt-sm-0">Send</Link>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab4" role="tabpanel">
                          <div className="scrollerchat">
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hello John, how can I help you today ?
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author7.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hi, I want to buy Link new shoes.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Shipment is free. You\'ll get your shoes tomorrow!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author7.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Wow that\'s great!
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Type message here ..." />
                              </div>
                            </div>
                            <div className="col-12 col-sm-3">
                              <Link to="#" className="btn btn-primary btn-default btn-block mt-3 mt-sm-0">Send</Link>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab5" role="tabpanel">
                          <div className="scrollerchat">
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hello John, how can I help you today ?
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author6.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hi, I want to buy Link new shoes.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Shipment is free. You\'ll get your shoes tomorrow!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author6.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Wow that\'s great!
                              </div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author3.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Ok. Thanks for the answer. Appreciated.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                You are welcome!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author6.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Type message here ..." />
                              </div>
                            </div>
                            <div className="col-12 col-sm-3">
                              <Link to="#" className="btn btn-primary btn-default btn-block mt-3 mt-sm-0">Send</Link>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab6" role="tabpanel">
                          <div className="scrollerchat">
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hello John, how can I help you today ?
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author8.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Hi, I want to buy Link new shoes.
                              </div>
                            </div>
                            <div className="media text-right in text-white w-75 ml-auto mb-4">
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Shipment is free. You\'ll get your shoes tomorrow!
                              </div>
                              <div className="d-flex ml-3 thumb-img"><Link to="#"><img src="dist/images/author8.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                            </div>
                            <div className="media text-right out w-75 mr-auto mb-4">
                              <div className="d-flex mr-3 thumb-img"><Link to="#"><img src="dist/images/author2.jpg" alt="" className="img-fluid rounded-circle" /></Link></div>
                              <div className="media-body p-3 mt-4 redial-font-weight-600 redial-rounded-circle-50 text-left">
                                Wow that\'s great!
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Type message here ..." />
                              </div>
                            </div>
                            <div className="col-12 col-sm-3">
                              <Link to="#" className="btn btn-primary btn-default btn-block mt-3 mt-sm-0">Send</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <div className="tab-pane fade" id={21} role="tabpanel" aria-labelledby="21-tab">
              <ul className="mb-0 list-unstyled inbox">
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="scheckbox12" />
                      <label htmlFor="scheckbox12" className="redial-dark redial-font-weight-600">John Smith</label>
                      <small className="float-right text-muted"><i className="fa fa-paperclip pr-1" /> Aug 10</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" /> No Subject Lorem ipsum dolor sit amet </small>
                    </div>
                  </Link>
                </li>
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="scheckbox13" />
                      <label htmlFor="scheckbox13" className="redial-dark redial-font-weight-600">Lauren Boggs</label>
                      <small className="float-right text-muted"> Nov 5</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" />Invite Lorem ipsum dolor sit amet</small>
                    </div>
                  </Link>
                </li>
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="scheckbox14" />
                      <label htmlFor="scheckbox14" className="redial-dark redial-font-weight-600">Devid Taylor</label>
                      <small className="float-right text-muted"><i className="fa fa-paperclip pr-1" /> Jan 25</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" />Developemnt  Lorem ipsum dolor sit amet</small>
                    </div>
                  </Link>
                </li>
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="sscheckbox12" />
                      <label htmlFor="sscheckbox12" className="redial-dark redial-font-weight-600">John Smith</label>
                      <small className="float-right text-muted"><i className="fa fa-paperclip pr-1" /> Aug 10</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" /> No Subject Lorem ipsum dolor sit amet </small>
                    </div>
                  </Link>
                </li>
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="sscheckbox13" />
                      <label htmlFor="sscheckbox13" className="redial-dark redial-font-weight-600">Lauren Boggs</label>
                      <small className="float-right text-muted"> Nov 5</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" />Invite Lorem ipsum dolor sit amet</small>
                    </div>
                  </Link>
                </li>
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="sscheckbox14" />
                      <label htmlFor="sscheckbox14" className="redial-dark redial-font-weight-600">Devid Taylor</label>
                      <small className="float-right text-muted"><i className="fa fa-paperclip pr-1" /> Jan 25</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" />Developemnt  Lorem ipsum dolor sit amet</small>
                    </div>
                  </Link>
                </li>
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="ccheckbox14" />
                      <label htmlFor="ccheckbox14" className="redial-dark redial-font-weight-600">Devid Taylor</label>
                      <small className="float-right text-muted"><i className="fa fa-paperclip pr-1" /> Jan 25</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" />Developemnt  Lorem ipsum dolor sit amet</small>
                    </div>
                  </Link>
                </li>
                <li className="border border-top-0 border-left-0 border-right-0">
                  <Link to="#" className="h6">
                    <div className="form-group mb-0 p-3">
                      <input type="checkbox" id="vcheckbox14" />
                      <label htmlFor="vcheckbox14" className="redial-dark redial-font-weight-600">Devid Taylor</label>
                      <small className="float-right text-muted"><i className="fa fa-paperclip pr-1" /> Jan 25</small>
                      <small className="d-block pt-2"><i className="fa fa-star pr-2" />Developemnt  Lorem ipsum dolor sit amet</small>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default SidePanel