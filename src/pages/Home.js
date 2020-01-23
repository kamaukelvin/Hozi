import React from 'react'
import Hero from "../components/Hero"
import Description from '../components/Description'
import Featured from '../components/Featured'
import Service from '../components/Service'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

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