import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./UpdateProfil.css"

function UpdateForm () {
    const userProfile = useSelector((state => state.userReducer.userProfile));
    const [userName, setUserName] = useState('');
    console.log(userProfile);
    const sendUpdateForm = (e) => {
        e.preventDefault();
    }
    return (
        <form className="update_profil" onSubmit={sendUpdateForm}>
            <h1>Edit user info</h1>
            <div className="input-wrapper" id='update_profil_input'>
                <label>
                    User name:
                    <input
                    type=""
                    placeholder={userProfile.userName}     
                    id="user_name" 
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}                    
                    />    
                </label>
                <label>
                    First name:
                    <input 
                    type='text'
                    placeholder={userProfile.firstName}
                    id='first_name'
                    readOnly
                    />
                </label>
                <label>
                    Last name:
                    <input
                    type='text'
                    placeholder={userProfile.lastName}
                    id='last_name'
                    readOnly
                    />
                </label>
            </div>

        </form>
    )
}
export default UpdateForm