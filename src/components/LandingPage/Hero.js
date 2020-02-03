import React from 'react'
import Logo from "../../assets/img/logo.svg"
import {Link} from "react-router-dom"
import iconSet from "../../assets/fonts/selection.json";
import { iconList } from "icomoon-react";
import Icon from "../../Icon";

 const Hero = () => {
  console.log(iconList(iconSet));
    return (
        <div className="hero ">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-10">
            <div className="top">
              <div className="left">
                <img src={Logo} alt="" className="logo" />
              </div>
              <div className="right">
                <div className="input-group mr-sm-2 input-icon">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent">
                      <Icon className="ico ico-search-b" icon="search-b" size={20} />
                    </div>
                  </div>
                  <input type="text" className="form-control trans"  placeholder="Search Property"  />
                </div>
              </div>
            </div>
            <div className="row content">
              <div className="col-12 col-lg-6 col-xl-5">
                <div className="big-txt">
                  Let hozi help you find your home.
                </div>
                <div className="button-group">
                  <Link className="btn btn-secondary" to="">LISTINGS <Icon className="ico ico-right" icon="right"  size={15} /></Link>
                  <Link className="btn btn-transparent" to="">CONTACT US</Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="links-blue">
                  <div className="link-item">Home</div>
                    <Link className="link-item" to="/properties">Properties
                    </Link>
                  <div className="link-item">Project</div>
                  <div className="link-item">Agents</div>
                  <div className="link-item">About Us</div>
                  <div className="link-item">Blog</div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    
      
    );
  }

    
    

export default Hero