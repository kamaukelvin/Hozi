import React from 'react'
import logo from '../../assets/dist/images/logo-v1.png'
import Featured from "./Featured"

 function Footer() {
    return (
        <footer class="section section_footer">
            <Featured/>
        <div className id="content">
        <div className="row">
          <div className="col-12 col-md-3 col-xl-3">
            {/* About Us */}
            <h6 className="section_footer__heading">
              <img src={logo} alt="" className="logofooter img-fluid" /> About Hozi
            </h6>
            <p>
              Hozi ipsum dolor sit amet <br /> na mandazi za total
            </p>
            <ul className="section_footer__info">
              <li className="socials">
                <b>{/*  <i class="fa fa-address-book"></i> */} Stay connected</b>
                <a href className="col-2 col-sm-2"><i className="fa fa-facebook" /></a>
                <a href className="col-2 col-sm-2"><i className="fa fa-twitter" /></a>
                <a href className="col-2 col-sm-2"><i className="fa fa-instagram" /></a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-3">
            {/* Contact info */}
            <h6 className="section_footer__heading">
              <i className="fa fa-address-book" />  Contact info
            </h6>
            <ul className="section_footer__info">
              <li>
                <b>Where to find us</b>
                <i className="fa fa-map-marker" /> 1234 Biashara St, NBI
              </li>
              <li>
                <b>How to reach us</b>
                <i className="fa fa-phone" /> +254 987 654 3210
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-xl-6 mappa">
            {/*  <h6>Our Location</h6>   */} 
            <div id="markermap" />
          </div>
        </div> {/* / .row */}
        <div className="col-12 nopad">
          {/* Copyright */}
          <div className="section_footer__copyright text-left">
            <i className="fa fa-copyright" /> <span id="js-current-year">2018</span> Hozi. All rights reserved.
          </div>
        </div>
      </div>
      </footer>
      
    )
}

export default Footer