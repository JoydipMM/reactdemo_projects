import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addAuthUser } from '../utils/slices/authSlice'

const Login = () => {

  const dispatch = useDispatch()

  const [email, setEmail] = React.useState('ashoke@testmail.com')
  const [password, setPassword] = React.useState('1234@Ashoke')

  const submitEvent = async(e) => {
    e.preventDefault()
    console.log(email, password);

    try{
      const user = await axios.post('http://localhost:3001/auth/login', {email, password}, { withCredentials: true })
      if(user){
        console.log(user.data.user);
        dispatch(addAuthUser(user.data.user))
      }
    }catch(err){
      console.log(err);
    }
  }


  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content max-w-4xl flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={submitEvent}>
                <fieldset className="fieldset gap-3">
                  <label className="label">Email</label>
                  <input type="email" className="input w-full" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <label className="label">Password</label>
                  <input type="password" className="input w-full" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <div className='text-right'><Link className="link link-hover">Forgot password?</Link></div>
                  <button type="submit" className="btn btn-primary mt-4">Login</button>
                  <div className="divider"><Link to="/register" className="link link-hover">Sign Up</Link></div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
