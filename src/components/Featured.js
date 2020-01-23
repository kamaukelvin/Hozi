import React,{useState} from 'react'
import bg from "../assets/img/house-1.jpg"
import bg2 from "../assets/img/house-2.jpg"
import Icon from "../Icon";

 const Featured = () => {

// states here

    const [properties]= useState([
        {
        image: bg,
        name: 'Uhuru Square',
        price: '3,000,000',
        features: [
            '4 Bedrooms',
            '2 Bedrooms DSQ',
            '4000 SQFT'
        ]
    },
    {
        image: bg2,
        name: 'Uhuru Square',
        price: '3,000,000',
        features: [
            '4 Bedrooms',
            '2 Bedrooms DSQ',
            '4000 SQFT'
        ]
    }])

    return (
        <div>
            <div className="featured">
                <div className="row flx">
                    <div className="col-12 col-lg-4 blue">
                        <div className="title">Featured Properties</div>
                    </div>
                  
                        {properties.map(({name,price, image,features})=>{
                            return(
                                <>
                                    <div className="col-12 col-lg-3 image" style={{backgroundImage: `url(${image})`}}>
                                        <div className="overlay">
                                            <div className="content">
                               
                                                <div className="name">{name}</div>
                                                <div className="price">KES{price}</div>
                                                <div className="features">
                                                        {features.map(feature=>{
                                                            return(<div className="feature">{feature}</div>)
                                                        })}
                                                </div>
                                    
                                            </div>
                                            <div className="btn-box">
                                                <div className=" btn-icon"><Icon className="ico ico-right" icon="right"  size={20} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                <div className="col-12 col-lg-2 blue" />
                </div>
            </div>  
        </div>  
        
    )
}

export default Featured