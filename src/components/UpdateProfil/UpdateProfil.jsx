import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./UpdateProfil.css"
import { updateProfil } from '../../actions/action';

function UpdateForm ({ onCancel }) {
    const userProfile = useSelector((state => state.userReducer.userProfile));
    const [userName, setUserName] = useState('');

    const dispatch = useDispatch();
    
    const sendUserUpdate = (e) => {
        e.preventDefault();
        dispatch(updateProfil(userName));
        onCancel();
    }
    return (
        <form onSubmit={sendUserUpdate} className="update_profil" >
            <h1>Edit user info</h1>
            <div className="input-wrapper" id='update_profil_input'>
                <label>
                    User name:
                    <input
                    type="text"
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
                <div id="save_cancel_button">
            <input id="input-submit" name="submit" type="submit" value="Save" className="save-button" onClick={sendUserUpdate}/>
            <input id="input-submit" name="submit" type="submit" value="Cancel" className="cancel-button" onClick={onCancel} />
            </div>
            </div>

        </form>
    )
}
export default UpdateForm