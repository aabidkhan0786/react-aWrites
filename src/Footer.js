import React from 'react'
import img from '../src/image/thanks1.gif';
import "./index.css"


const Footer =()=>{
    return(
        <> 
        <div className="container">     
                <img className="img" src={img} alt="thanks_gifs"></img>
        </div>

     
            <div class="footer">
                <h3 class="foot">Designed By Abdul Aabid Khan © All Rights Reserved.</h3>
            </div>
        
        </>
    )
}

export default Footer;


