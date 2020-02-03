import React from 'react'
import couple from "../../assets/img/couple.png"

 const Description = () => {
    return (
<div className="description-box">
        <div className="row justify-content-md-center">
          <div className="col-12 col-lg-11 col-xl-10">
            <div className="row">
              <div className="col-12 col-lg-6">
                <img src={couple} alt="Description" className="person" />
              </div>
              <div className="col-12 col-lg-5" style={{textAlign: 'center'}}>
                <div className="title">We dont build houses, we build homes.</div>
                <div className="desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis minima aliquid tenetur 
                  cum iusto est. Accusantium, enim doloribus amet perspiciatis, ipsam dignissimos libero odit 
                  exercitationem quaerat voluptatibus iste dolorum praesentium.
                </div>
                <div className="center">
                  <button className="btn btn-read">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Description