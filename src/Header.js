import React from 'react'
import logo2 from "../src/image/logo2.png"
import "./index.css"



const Header =()=>{
    return(
        <>             
            <nav className="navbar text-white">
                <a className="navbar-brand" href="/">
                    <img src={logo2} width="40" height="40" className="d-inline-block align-top" alt="logo" loading="lazy"/>
                    <span className="head pl-3 py-auto text-white"><u>aWrites</u></span>
                </a>
            </nav>
        </>
    )
}

export default Header;
