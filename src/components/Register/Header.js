import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../assets/dist/images/logo-v1.png"
import ke from "../../assets/dist/images/ke.png"
import ug from "../../assets/dist/images/ug.png"
import tz from "../../assets/dist/images/tz.png"

 function Header() {
    return (
        <div>
           <div id="header-fix" className="header py-4 py-lg-2 fixed-top active">
        <div className="container-fluid">
          <div className>
            <div className="col-12 col-lg-3 col-xl-2 align-self-center float-left">
              <div className="site-logo">
                <Link to="/"><img src={logo} alt="" className="img-fluid" /></Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-4 col-xl-3 d-none d-lg-inline-block float-right nopad">
              <nav className="navbar navbar-expand-lg p-0">
                <ul className="navbar-nav col-12 nopad">
                  <li className="col-9">
                    <form className="col-12">
                      <div className="form-group">
                        <select title="Select your surfboard" className="selectpicker">
                          <option>Select Country</option>
                          <option data-thumbnail={ke}>Kenya</option>
                          <option data-thumbnail={ug}>Uganda</option>
                          <option data-thumbnail={tz}>Tanzania</option>
                        </select>
                      </div>
                    </form>
                  </li>
                  <li className="col-3 float-right">
                    <Link className to="/">
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Header