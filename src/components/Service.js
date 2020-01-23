import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Icon from "../Icon";

const Service = () => {
    return (
        <div>
            <div className="services">
            <div className="row justify-content-md-center">
              <div className="col-12 col-lg-11">
                <div className="title">Service</div>
                <div id="carouselService" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselService" data-slide-to={0} className="active" />
                    <li data-target="#carouselService" data-slide-to={1} />
                  </ol>
                  <Carousel>
                    <Carousel.Item>
                      <div className="row" style={{textAlign: 'center'}}>
                        <div className="col-12 col-lg-4">
                          <div className="icon-box">
                            <Icon className="ico ico-detective" color="#FDA100" icon="detective" size="1em" />
                          </div>
                          <div className="txt-title">Property Management</div>
                          <div className="txt">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                            deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                            facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="icon-box">
                            <Icon className="ico ico-qr-code-b" color="#FDA100" icon="qr-code-b" size="1em" />
                          </div>
                          <div className="txt-title">Project Management</div>
                          <div className="txt">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                            deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                            facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="icon-box">
                            <Icon className="ico ico-devices" color="#FDA100" icon="devices" size="1em" />
                          </div>
                          <div className="txt-title">Hotel Management</div>
                          <div className="txt">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                            deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                            facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="row" style={{textAlign: 'center'}}>
                        <div className="col-12 col-lg-4">
                          <div className="icon-box">
                            <Icon className="ico ico-sketch"  color="#FDA100" icon="sketch" size="1em"/>
                          </div>
                          <div className="txt-title">Property Management</div>
                          <div className="txt">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                            deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                            facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="icon-box">
                            <Icon className="ico ico-users" color="#FDA100" icon="users" size="1em"/>
                          </div>
                          <div className="txt-title">Project Management</div>
                          <div className="txt">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                            deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                            facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="icon-box">
                            <Icon className="ico ico-receipt" color="#FDA100" icon="receipt" size="1em" />
                          </div>
                          <div className="txt-title">Hotel Management</div>
                          <div className="txt">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                            deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                            facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                          </div>
                        </div>
                      </div>
                      </Carousel.Item>
                    </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Service