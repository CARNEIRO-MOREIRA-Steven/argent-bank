import "./userHomePage.css"
import UpdateForm from "../UpdateProfil/UpdateProfil"
import React, {useEffect, useState} from "react"
import { userProfil } from "../../actions/action"
import { useDispatch, useSelector } from "react-redux"


const HomePage = () =>{
  const userProfile = useSelector((state => state.userReducer.userProfile));
  let token = localStorage.getItem('token') || sessionStorage.getItem('token')
  const dispatch = useDispatch();
  useEffect(() => {
    if(token){
    dispatch(userProfil(token));
    }
},[dispatch,token]);

const [isFormVisible, setIsFormVisible] = useState(false);

  const userUpdate = (e) => {
    if(e){
    e.preventDefault();
    setIsFormVisible(!isFormVisible)
  }
}
    return (
        <main className="main bg-dark" onChange={userProfil}>
            <div className="banner">
            {isFormVisible ? null : ( 
            <div>
            <h1> Welcome back<br/>{userProfile.firstName} {userProfile.lastName}</h1>   
            <button className="edit-button" onClick={userUpdate}>Edit Name</button>
            </div> )} 
            {isFormVisible && (
            <div className="update_profil_button">
            <UpdateForm onCancel={userUpdate} />
            </div>)
            }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
        </main>
    )
}
export default HomePage