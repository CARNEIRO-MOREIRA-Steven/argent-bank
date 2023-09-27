import React from 'react';
import { Link } from 'react-router-dom'
import Logo from "../../assets/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "../Header/Header.css"
function Header() {
    return (
        <nav className='main-nav'>
            
            <Link className='main-nav-logo' to="/">
                <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo"></img>
            </Link> 
            <h1 class="sr-only">Argent Bank</h1>
            <Link className="main-nav-item" to="/se_connecter">
                <i className='fa fa-user-circle'></i> 
                <FontAwesomeIcon icon="fa-solid fa-circle-user" style={{color: "#2c3e50",}}/>
                Sign In
            </Link>  
        </nav>
       
    )
}

export default Header       