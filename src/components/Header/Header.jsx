import React from 'react';
import { Link } from 'react-router-dom'
import Logo from "../../assets/argentBankLogo.png"

import "../Header/Header.css"
function Header() {
    return (
        <nav className='main-nav'> 
            <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo"></img>
            <Link className="main-nav-item" to="/se_connecter"><i className='fa fa-user-circle'></i>Sign In</Link>  
        </nav>
       
    )
}

export default Header       