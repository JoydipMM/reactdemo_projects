import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addAuthUser } from '../utils/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../utils/constants'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('ashoke@testmail.com')
  const [password, setPassword] = useState('1234@Ashoke')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const submitEvent = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true })
      if (res.data.user) {
        dispatch(addAuthUser(res.data.user))
        navigate('/')
      }
    } catch (err) {
      console.error("Login failed:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4 animate-in fade-in duration-700">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-200">

        {/* Left Side: Visual Branding */}
        <div className="lg:w-1/2 p-12 bg-neutral text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-primary p-2 rounded-2xl shadow-xl shadow-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight">GravitySocial</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Connect with <br />
              <span className="text-primary italic">Developers</span> & <br />
              Innovators.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              The professional cloud-social network for the modern age. Share your journey, build with others, and reach your peak potential.
            </p>
          </div>

          {/* <div className="relative z-10 pt-10">
            <div className="flex -space-x-4 mb-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-neutral ring-primary ring-offset-2" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
              ))}
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xs font-bold ring-primary ring-offset-2 border-2 border-neutral">+2k</div>
            </div>
            <p className="text-sm font-medium text-white/50">Join thousand of developers today</p>
          </div> */}



        </div>

        {/* Right Side: Form Area */}
        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-base-100">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10 block lg:hidden text-center">
              <span className="text-2xl font-black text-primary">GravitySocial</span>
            </div>

            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-base-content/60 mb-10">Please enter your details to sign in.</p>


            <form onSubmit={submitEvent} className="space-y-6">
              <div className="form-control w-full">
                <label className="label text-xs font-bold uppercase tracking-widest text-base-content/40 mb-1 px-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/30 group-focus-within:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200 border-none focus:ring-2 focus:ring-primary/40 font-medium transition-all"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <div className="flex justify-between items-end mb-1 px-1">
                  <label className="label text-xs font-bold uppercase tracking-widest text-base-content/40">Password</label>
                  <Link className="text-[11px] font-bold text-primary hover:underline transition-all">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/30 group-focus-within:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pl-12 pr-12 h-14 rounded-2xl bg-base-200 border-none focus:ring-2 focus:ring-primary/40 font-medium transition-all"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/30 hover:text-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full h-14 rounded-2xl shadow-xl shadow-primary/30 text-white font-bold tracking-wider text-lg transition-all ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Login"}
              </button>
            </form>

            <p className="mt-10 text-center text-base-content/60 font-medium">
              Not a member? <Link to="/register" className="text-primary font-bold hover:underline ml-1">Create an account</Link>
            </p>


            <div className="divider text-base-content/20 text-[10px] uppercase font-black tracking-widest mt-8 mb-8">Or continue with email</div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-1 gap-4 mb-8 text-center">

              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>


              {/* <button className="btn btn-outline border-base-300 rounded-2xl gap-2 hover:bg-base-200 hover:text-base-content transition-all py-3">
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                <span className="text-xs font-bold uppercase tracking-wider">Google</span>
              </button>
              <button className="btn btn-outline border-base-300 rounded-2xl gap-2 hover:bg-base-200 hover:text-base-content transition-all py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github w-4 h-4" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">GitHub</span>
              </button> */}


            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
