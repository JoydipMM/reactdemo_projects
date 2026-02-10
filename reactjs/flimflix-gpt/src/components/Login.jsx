import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSigninForm((prev) => !prev);
    }
  return (
    <div>
        <Header/>
        <br/>
      <h4>{isSigninForm ? "Sign In" : "Sign Up"}</h4>
      <div>
        <div>
            <form>
                {!isSigninForm && <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="password" name="fullname" id="fullname" className='form_field' placeholder='Fullname' />
                </div> }
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='form_field' placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className='form_field' placeholder='Password' />
                </div>
                <div>
                    <button type="submit" className='submit_btn login_btn'>{isSigninForm ? "Sign In" : "Sign Up"}</button>
                </div>
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
