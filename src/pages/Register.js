import React from 'react'
import Header from "../components/Register/Header"
import Index from '../components/Register/FormWizard/Index'
import SidePanel from '../components/Register/SidePanel'
import Footer from '../components/Register/Footer'



 function Login() {
    return (
        <div>
          <Header/>
          <Index/>
          <SidePanel/>
          <Footer/>  
        </div>
    )
}

export default Login