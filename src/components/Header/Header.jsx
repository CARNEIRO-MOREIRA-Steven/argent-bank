import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector} from 'react-redux';


import "../Header/Header.css"
import { logoutUser } from '../../actions/action';
function Header() {
    const userProfile = useSelector((state => state.userReducer.userProfile));
    const tokenLocalStorage = localStorage.getItem('token');
    const tokenSessionStorage = sessionStorage.getItem('token');
    const token = tokenLocalStorage || tokenSessionStorage;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogout = (e) => {
        e.preventDefault()
        dispatch(logoutUser)
        navigate('/');
        console.log(localStorage.getItem('token'));
    }
    if (token) {
        return (
            <nav className='main-nav'>

                <Link className='main-nav-logo' to="/">
                    <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo"></img>
                </Link>
                <h1 className="sr-only">Argent Bank</h1>
                    <section className="main-nav-item">
                    <Link className="main-nav-item" to='/profil'>    
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                    <p className='main-nav-username'>{userProfile.firstName}</p>
                    </Link>
                    <Link className="main-nav-item" onClick={userLogout}> 
                    <FontAwesomeIcon icon="fa-arrow-right-from-bracket" />
                    Sign Out
                </Link>
                </section>
            </nav>
        );
    } else {
        return (
            <nav className='main-nav'>
                <Link className='main-nav-logo' to="/">
                    <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo"></img>
                </Link>
                <h1 className="sr-only">Argent Bank</h1>
                <Link className="main-nav-item" to="/se_connecter" >
                    <i className='fa fa-user-circle'></i>
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" style={{ color: "#2c3e50", }} />
                    Sign In
                </Link>
            </nav>
        );
    }
}

export default Header;