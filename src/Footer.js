import React from 'react'
import img from '../src/image/thanks1.gif';
import "./index.css"


const Footer = () => {
    return (
        <>
            <div className="container">
                <img className="img" src={img} alt="thanks_gifs"></img>
            </div>
            <div className="footer">
                <h3 className="foot">Designed By Abdul Aabid Khan © All Rights Reserved.</h3>
            </div>

        </>
    )
}

export default Footer;


