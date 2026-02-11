import React, { useState, useRef } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const fullnameRef = useRef(null);

    const toggleSignInForm = () => {
        setIsSigninForm((prev) => !prev);
    }


    const handleButtonClick = (e) => {
        e.preventDefault();
        //console.log(emailRef.current.value);
        //console.log(passwordRef.current.value);
        const validateMsg = checkValidData(fullnameRef.current.value, emailRef.current.value, passwordRef.current.value);
        console.log(validateMsg);
        setErrorMsg(validateMsg);
    }


  return (
    <div>
        <Header/>
        <br/>
        <h2>tesststst</h2>
      <h4>{isSigninForm ? "Sign In" : "Sign Up"}</h4>
      <div>
        <div>
            <form onSubmit={(e)=> e.preventDefault()}>
                {!isSigninForm && <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input ref={fullnameRef} type="password" name="fullname" id="fullname" className='form_field' placeholder='Fullname' />
                </div> }
                <div>
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" name="email" id="email" className='form_field' placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input ref={passwordRef} type="password" name="password" id="password" className='form_field' placeholder='Password' />
                </div>
                <div>
                    <button type="submit" className='submit_btn login_btn' onClick={handleButtonClick}>{isSigninForm ? "Sign In" : "Sign Up"}</button>
                </div>
                <p style={{color:"red"}}>{errorMsg}</p>
                {isSigninForm ? 
                <div>are you now? <button className='signup_text_btn' onClick={toggleSignInForm}>Signup</button></div> :
                <div>already have an account? <button className='signup_text_btn' onClick={toggleSignInForm}>Signin</button></div>
                }
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
