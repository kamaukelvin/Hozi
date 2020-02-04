import React ,{useState} from 'react'
import comregico from "../../../assets/dist/images/comregico.png"
import tractico from "../../../assets/dist/images/tractico.png"
import homeico from "../../../assets/dist/images/homeico.png"
import axios from "axios"
import { validateAll } from "indicative/validator"


export default function BasicInfo() {

    const [newUser, setNewUser]= useState({
        contact:"",
        email: "",
        module:"",
        promoCode:"",
    })

const [errors, setErrors]= useState({})

const handleNewUserChange=(evt)=> {
    const value = evt.target.value;
    setNewUser({
        ...newUser,
      [evt.target.name]: value
    });
 
    
  }

    //   post new user to api

      const postUser=()=>{
        axios
        .post("https://reqres.in/api/users", newUser)
        .then(res => {
          console.log(res.data);
        })
        // errors are printed out in the console
        .catch(error => console.log(error));
    };


     const  handleSubmit = e => {
        console.log("this is what the user has entered",newUser)
        e.preventDefault();
        
        // validate input fields
        const data = newUser;
        const rules= {
            contact:'required|number',
            email:'required|email'
        }
        const messages={
            required: '{{field}} is required',
            'email.email': 'The email is invalid.',
        }

        validateAll(data,rules, messages)
                .then(()=>{
                    postUser()
                    })
                .catch(errors=>{
                    console.log(errors)
                    // display errors
                    const formattedErrors={}
                   errors.forEach(error=>formattedErrors[error.field]=error.message)
                    setErrors(formattedErrors)
              
                })
        // clear input fields after submitting
                setNewUser({
                    contact:"",
                    email: "",
                    module:"",
                    promoCode:"",

                })
        
     }

    return (
            <form onSubmit={e => handleSubmit(e)}>
            <div className="row">
                <div className="col-12 col-sm-12 underlinebot linecolight">
                <h4 className="card-title">Registration</h4>
                <p>Lorem: ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip unga ya jogoo.</p>
                </div>
                <div className="col-12 col-sm-12 margtop5em float-right col-lg-6">
                <div className="col-12 col-sm-12">
                    <div className="form">
                    <div className="form-group">
                        <label className="redial-font-weight-800">Contact</label>
                        <input type="text" className="form-control bg-transparent" placeholder name="contact" value={newUser.contact || ""} onChange={handleNewUserChange} required
                            />
                        <small className="form-text">Only letters, numbers, and underscores are allowed.</small>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12">
                    <div className="form">
                    <div className="form-group">
                        <label className="redial-font-weight-800">Email</label>
                        <input type="email" className="form-control bg-transparent" placeholder name="email"  value={newUser.email || ""} onChange={handleNewUserChange} required
                            />
                        <small className="form-text">6-character minimum; case sensitive.</small>
                    </div>
                    </div>
                </div>
                <label className="float-left col-12 col-sm-12 redial-font-weight-800">Choose Module</label>
                <div className="rounded-0 float-left col-12 col-sm-4">
                    <input type="radio"  name="module" id="pmm" value= "pmm" onChange={handleNewUserChange}/>
                    <label htmlFor="pmm">PMM</label>
                </div>
                <div  className="rounded-0 float-left col-12 col-sm-4">
                    <input type="radio" id="pm" name="module" value= "pm" onChange={handleNewUserChange}/>
                    <label htmlFor="pm">PM</label>
                </div>
                <div className="rounded-0 float-left col-12 col-sm-4">
                    <input type="radio" id="osp" name="module" value= "osp"  onChange={handleNewUserChange} />
                    <label htmlFor="osp">OSP</label>
                </div>
                <div className="col-12 col-sm-12">
                    <div className="form">
                    <div className="form-group">
                        <label className="redial-font-weight-800">Promo Code</label>
                        <input type="text" className="form-control bg-transparent" placeholder name="promoCode" value={newUser.promoCode} onChange={handleNewUserChange} />
                        <small className="form-text">6-character minimum; case sensitive.</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 card-body nopad">
                <div className="col-12 col-sm-12 col-lg-12 card-body margtop5em float-left">
                    <div className="col-12 col-sm-12 margtop2em">
                    <div className="col-3 col-sm-3 float-left">
                        <img src={comregico} alt="" />
                    </div>
                    <p className="col-9 col-sm-9 col-md-12 col-lg-9 float-left"><b>PM:</b> Only letters, numbers,  and mangwashe za stackoverflow allowed.
                    </p>
                    </div>
                    <div className="col-12 col-sm-12 margtop2em">
                    <div className="col-3 col-sm-3 float-left">
                        <img src={tractico} alt="" />
                    </div>
                    <p className="col-9 col-sm-9 col-md-12 col-lg-9 float-left"><b>PM:</b> Only letters, numbers,  and mangwashe za stackoverflow allowed.
                    </p>
                    </div>
                    <div className="col-12 col-sm-12 margtop2em">
                    <div className="col-3 col-sm-3 float-left">
                        <img src={homeico} alt="" />
                    </div>
                    <p className="col-9 col-sm-9 col-md-12 col-lg-9 float-left"><b>PM:</b> Only letters, numbers,  and mangwashe za stackoverflow allowed.
                    </p>
                    </div>
                </div>
                </div>
                </div>
                <div className="pager wizard">
                <button className="next btn btn-primary btn-sm  text-uppercase px-5 float-sm-right mt-sm-0 mt-3"  type="submit">Next</button>
                </div>
                                
            </form>
                        
                             
    )
}
