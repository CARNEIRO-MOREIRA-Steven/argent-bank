import React from 'react';
import { Link } from 'react-router-dom'
import Logo from "../assets/argentBankLogo.png"
function Header() {
    return (
        <nav> 
            <img src={Logo}></img>
            <Link to="/se_connecter">Se connecter</Link>
        </nav>
       
    )
}

export default Header       