import React from 'react'
import TopNav from "../components/LandingPage/TopNav"
import RentProperties from "../components/LandingPage/RentProperties"
import Latest from '../components/LandingPage/Latest'
import Service from "../components/LandingPage/Service"
import Testimonial from "../components/LandingPage/Testimonial"
import Footer from "../components/LandingPage/Footer"


 const Properties = () => {
    return (
        <div>
            <TopNav/>
            <Latest/>
            <RentProperties/>
            <Service/>
            <Testimonial/>
            <Footer/>
       
        </div>
    )
}

export default Properties