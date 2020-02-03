import React from 'react'
import Hero from "../components/LandingPage/Hero"
import Description from '../components/LandingPage/Description'
import Featured from '../components/LandingPage/Featured'
import Service from '../components/LandingPage/Service'
import Testimonial from '../components/LandingPage/Testimonial'
import Footer from '../components/LandingPage/Footer'

const Home = () => {
    return (
        <div>
           <Hero/> 
           <Description/>
           <Featured/>
           <Service/>
           <Testimonial/>
           <Footer/>
        </div>
    )
}
export default Home