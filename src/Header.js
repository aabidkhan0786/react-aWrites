import React from 'react'
import logo2 from "../src/image/logo2.png"
import "./index.css"



const Header =()=>{
    return(
        <>
                    
            <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
                <img src={logo2} width="40" height="40" class="d-inline-block align-top " alt="logo" loading="lazy"/>
                    <span className="head pl-3 py-auto"><u>aWrites</u></span>
                </a>  
 
            </nav>
        </>
    )
}

export default Header;
