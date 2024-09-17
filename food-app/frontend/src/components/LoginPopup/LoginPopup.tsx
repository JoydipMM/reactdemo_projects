import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {

    const [currentLogState, setCurrentLogState] = useState("Login");


  return (
    <div>
        <form>
            <h3>{currentLogState}</h3>
            <button onClick={()=>setShowLogin(false)}>close</button>

            <div className="loginpoup-form">
                {currentLogState==="Login"?<></>:<input type="text" placeholder="Your Name" />}
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>{currentLogState==="Sign up"?"Create an account": "Login"}</button>

                {currentLogState==="Login"? <p>New User ? <span onClick={()=>setCurrentLogState("Sign Up")}><b><u>Click here</u></b></span></p>
                : <p>Already have an acount <span onClick={()=>setCurrentLogState("Login")}><b><u>Click here</u></b></span></p>
                }
            </div>
        </form>
    </div>
  )
}

export default LoginPopup
