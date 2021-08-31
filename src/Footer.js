import React from 'react'
import img from '../src/image/thanks1.gif';
import "./index.css"


const Footer = () => {
    return (
        <>
            <div className="container">
                <img className="img my-4" src={img} alt="thanks_gifs"></img>
            </div>
            <div className="footer">
                <h5 className="foot">Designed By Abdul Aabid Khan © All Rights Reserved.</h5>
            </div>

        </>
    )
}

export default Footer;


