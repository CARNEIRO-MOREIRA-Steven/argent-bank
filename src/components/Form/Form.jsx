import React from "react"
import { Link } from 'react-router-dom'
import "../Form/Form.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Form(){
    return (
    <section className="sign-in-content">
        <FontAwesomeIcon id="sign-in-icon" icon="fa-solid fa-circle-user" style={{color: "#2c3e50",}}/>
        <h1>Sign In</h1>
        <form>
            <div className="input-wrapper">
                <label>
                    Username 
                    <input type="text" id="username"/>    
                </label>
            </div>
            <div className="input-wrapper">
                <label>
                    Password
                    <input type="password" id="password"/>
                </label>
            </div>
            <div className="input-wrapper">
                <input type="checkbox" id="remember-me"/>
                    <label id="input-remember-label">
                        Remember me
                    </label>
            </div>
          <Link to="/profil" className="sign-in-button">Sign In</Link>
        </form>
        </section>
    )
}

export default Form