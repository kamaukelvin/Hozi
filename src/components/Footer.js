import React from 'react'
import Logo from "../assets/img/logo-grey.svg"
import {BrowserRouter as Router,Link} from "react-router-dom"

const Footer = () => {
    return (
        <div>
          <div className="footer">
        <div className="social">
          <i className="ico ico-twitter-dark" />
          <i className="ico ico-facebook-dark" />
        </div>
        <div className="links">
          <Router>
          <Link to ="#" className="link">HOME<div className="dot" /></Link>
          <Link to ="#" className="link">PROPERTIES<div className="dot" /></Link>
          <Link to ="#" className="link">PROJECT<div className="dot" /></Link>
          <Link to ="#" className="link">AGENTS<div className="dot" /></Link>
          <Link to ="#" className="link">ABOUT US<div className="dot" /></Link>
          <Link to ="#" className="link">BLOG</Link>
          </Router>
        </div>
        <div className="newsletter">
          <div className="title">STAY IN TOUCH</div>
          <div className="desc">Sign up for our newsletter to receive updates and exclusive offers</div>
          <div className="row justify-content-md-center form">
            <div className="col-12 col-md-10 col-lg-9 col-xl-7">
              <div className="row">
                <div className="col-12 col-md-6">
                  <input type="text" className="form-control" placeholder="YOUR EMAIL ADDRESS" v-model="email" />
                </div>
                <div className="col-12 col-md-6">
                  <button className="btn btn-black">SIGN UP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-box">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="copyright">
          Copyright © 2020 Hozi. All rights reserved
        </div>
      </div>
        </div>
    )
}


export  default Footer