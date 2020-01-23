import React from 'react'
import Icon from "../Icon";
import Carousel from 'react-bootstrap/Carousel'

const Testimonial = () => {
    return (
        <div>
         <div className="testimonial">
        <div className="row justify-content-md-center">
          <div className="col-12 col-lg-11">
            <div className="title">Testimonials</div>
            <div id="carouselTestimonial" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselTestimonial" data-slide-to={0} className="active" />
                <li data-target="#carouselTestimonial" data-slide-to={1} />
              </ol>
              <Carousel>
              <Carousel.Item>
                  <div className="row" style={{textAlign: 'center'}}>
                    <div className="col-12 col-lg-4 testimony">
                      <div className="icon-box">
                        <div className="avatar-box">
                          <Icon className="ico ico-user-a" color="#fff" icon="user-a" size="1em"/>
                        </div>
                      </div>
                      <div className="txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                        deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                        facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                      </div>
                      <div className="txt-title">Shantel Wanjiku</div>
                      <div className="location">Nairobi</div>
                    </div>
                    <div className="col-12 col-lg-4 testimony">
                      <div className="icon-box">
                        <div className="avatar-box">
                        <Icon className="ico ico-user-a"  color="#fff" icon="user-a" size="1em"/>
                        </div>
                      </div>
                      <div className="txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                        deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                        facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                      </div>
                      <div className="txt-title">Shantel Wanjiku</div>
                      <div className="location">Nairobi</div>
                    </div>
                    <div className="col-12 col-lg-4 testimony">
                      <div className="icon-box">
                        <div className="avatar-box">
                        <Icon className="ico ico-user-a"  color="#fff" icon="user-a" size="1em"/>
                        </div>
                      </div>
                      <div className="txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                        deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                        facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                      </div>
                      <div className="txt-title">Shantel Wanjiku</div>
                      <div className="location">Nairobi</div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row" style={{textAlign: 'center'}}>
                    <div className="col-12 col-lg-4 testimony">
                      <div className="icon-box">
                        <div className="avatar-box">
                        <Icon className="ico ico-user-a"  color="#fff" icon="user-a" size="1em"/>
                        </div>
                      </div>
                      <div className="txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                        deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                        facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                      </div>
                      <div className="txt-title">Shantel Wanjiku</div>
                      <div className="location">Nairobi</div>
                    </div>
                    <div className="col-12 col-lg-4 testimony">
                      <div className="icon-box">
                        <div className="avatar-box">
                        <Icon className="ico ico-user-a"  color="#fff" icon="user-a" size="1em"/>
                        </div>
                      </div>
                      <div className="txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                        deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                        facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                      </div>
                      <div className="txt-title">Shantel Wanjiku</div>
                      <div className="location">Nairobi</div>
                    </div>
                    <div className="col-12 col-lg-4 testimony">
                      <div className="icon-box">
                        <div className="avatar-box">
                        <Icon className="ico ico-user-a"  color="#fff" icon="user-a" size="1em"/>
                        </div>
                      </div>
                      <div className="txt">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga soluta, 
                        deleniti delectus enim tenetur voluptatem exercitationem, magnam nisi aperiam sequi 
                        facere illo, alias blanditiis iusto repudiandae explicabo animi porro!
                      </div>
                      <div className="txt-title">Shantel Wanjiku</div>
                      <div className="location">Nairobi</div>
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


export default Testimonial