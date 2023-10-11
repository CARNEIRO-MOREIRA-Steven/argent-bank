import React, { useState} from "react"
import "../Form/Form.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch} from 'react-redux';
import { loginUser } from "../../actions/action";
import { useNavigate } from "react-router-dom";

//REDUX

const Form = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(loginUser(email, password, navigate, rememberMe));
    }

    return (
    <section className="sign-in-content">
        <FontAwesomeIcon id="sign-in-icon" icon="fa-solid fa-circle-user" style={{color: "#2c3e50",}}/>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label>
                    Username 
                    <input 
                    type="text" 
                    id="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>    
                </label>
            </div>
            <div className="input-wrapper">
                <label>
                    Password
                    <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}/>
                </label>
            </div>
            <div className="input-wrapper">
                <div className="input-wrapper-checkbox">
                    <label>
                        <input 
                        type="checkbox" 
                        id="remember-me"
                        value={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                    </label>
                </div> 
                <input id="input-submit" name="submit" type="submit" value="Sign In" className="sign-in-button"/>   
            </div>
        </form>
        </section>
    )
}

export default Form