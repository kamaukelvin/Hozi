import React from 'react'
import listintop from "../../assets/dist/images/listintop.jpg"
import listinred from "../../assets/dist/images/listinred.jpg"
import listinyel from "../../assets/dist/images/listinyel.jpg"
import listinbotm from "../../assets/dist/images/listinbotm.jpg"
import {Link} from "react-router-dom"

 function Featured() {
    return (
  
        <div className id="content">
        <div className="row">
          {/* Ads */}
          <div className="col-12 col-md-12 nopadsm">
            {/* One */}
            <section id="one" className="tiles col-12 col-md-12 nopadsm">
              <article>
                <span className="image">
                  <img src={listintop} alt="" />
                </span>
                <header className="major">
                  <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing </p>
                  <ul className="tags">
                    <li><Link to="/" className="link">design</Link></li>
                    <li><Link to="/" className="link">interrior art</Link></li>
                    <li><Link to="/" className="link">decor</Link></li>
                  </ul>
                </header>
              </article>
              <article>
                <header className="major">
                  <p>Luxury Homes</p>
                  <h4 className="text-danger">Ben The <b>Agent</b></h4>
                  <h1 className="text-danger">Runda Royale</h1>
                  <h2 className="text-danger">Phase 1</h2>
                  <h3><b>From</b> Ksh 1 Million</h3>
                  <Link className="btn btn-primary btn-sm  text-uppercase px-5 float-sm-left mt-sm-0 mt-3" to="/">Buy</Link>
                </header>
                <span className="image">
                  <div className="floating">
                    <div className="title">
                      <ul>
                        <li><span className="fa fa-bed pr-2" /><span>2 Beds</span></li>
                        <li><span className="fa fa-bath pr-2" /><span>2 Baths</span></li>
                        <li><span className="fa fa-tags pr-2" /><span>Ksh 10,000,000</span></li>
                      </ul>
                    </div>
                    <ul className="icons">
                      <li><span className="icon-social-twitter-circular" /></li>
                      <li><span className="icon-social-facebook-circular" /></li>
                      <li><span className="icon-social-pinterest-circular" /></li>
                    </ul>
                  </div>
                  <img src={listinred} alt="" />
                </span>
              </article>
              <article>
                <header className="major margtop2em">
                  <p className="text-danger"><b>Interior Decor</b></p>
                  <h4> <b>Home Decor</b></h4>
                  <p>Felis sagittis eget tempus primis</p>
                  <br />
                  <br />
                  <h4><b>By</b></h4>
                  <Link to="/" className="red"><b>Awino Ooko</b></Link>
                </header>
                <span className="image">
                  <div className="floating">
                    <ul className="icons">
                      <li><span className="icon-social-twitter-circular" /></li>
                      <li><span className="icon-social-facebook-circular" /></li>
                      <li><span className="icon-social-pinterest-circular" /></li>
                    </ul>
                  </div>
                  <Link className="button special small fit soo" to="/"><span className="ctabtn pr-2">+</span></Link>
                  <img src={listinyel} alt="" />
                </span>
              </article>
              <article>
                <span className="image">
                  <img src={listinbotm} alt="" />
                </span>
                <header className="major">
                  <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing </p>
                  <ul className="tags">
                    <li><Link to="/" className="link">design</Link></li>
                    <li><Link to="/" className="link">interrior art</Link></li>
                    <li><Link to="/" className="link">decor</Link></li>
                  </ul>
                </header>
              </article>
            </section>
          </div>
        </div>
      </div> 
   
    )
}

export default Featured