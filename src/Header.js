import React from 'react'
import logo2 from "../src/image/logo2.png"
import "./index.css"
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const Header = ({ alignList }) => {
    return (
        <>
            <nav className="navbar text-white d-flex justify-content-between">
                <a className="navbar-brand" href="/">
                    <img src={logo2} width="40" height="40" className="d-inline-block align-top" alt="logo" loading="lazy" />
                    <span className="head pl-3 py-auto text-white"><u>aWrites</u></span>
                </a>
                <div class="btn-group hide shadow" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light" onClick={()=>alignList(false)}><ViewModuleIcon /></button>
                    {/* <button type="button" class="btn btn-secondary">Middle</button> */}
                    <button type="button" class="btn btn-light" onClick={()=>alignList(true)} ><ViewListIcon /></button>
                </div>
            </nav>
        </>
    )
}

export default Header;
