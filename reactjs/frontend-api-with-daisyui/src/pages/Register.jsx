import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../utils/constants'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitEvent = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Note: Assuming the backend expects firstName, lastName, email, password
      const res = await axios.post(`${API_BASE_URL}/auth/signup`, formData, { withCredentials: true })
      if (res.status === 200 || res.status === 201) {
        navigate('/login')
      }
    } catch (err) {
      console.error("Registration failed:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4 animate-in fade-in duration-700">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row-reverse bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-200">

        {/* Right Side: Visual Branding (Reversed for variety) */}
        <div className="lg:w-1/2 p-12 bg-neutral text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mb-32"></div>

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
              Join the <br />
              <span className="text-secondary italic">Community</span> of <br />
              Future Makers.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Create your profile, showcase your skills, and start collaborating with developers from around the globe.
            </p>
          </div>

          <div className="relative z-10 pt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10">
                <div className="text-primary font-bold text-lg mb-1">100% Free</div>
                <p className="text-xs text-white/40">No hidden costs or subscriptions for basic networking.</p>
              </div>
              {/* <div className="bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10">
                   <div className="text-secondary font-bold text-lg mb-1">Global Reach</div>
                   <p className="text-xs text-white/40">Connect with talent across 150+ countries.</p>
                </div> */}
            </div>
          </div>
        </div>

        {/* Left Side: Form Area */}
        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-base-100">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-bold mb-2">Get Started</h2>
            <p className="text-base-content/60 mb-8">Join GravitySocial and start your journey.</p>

            <form onSubmit={submitEvent} className="space-y-4">
              <input
                    name="name"
                    type="text"
                    className="input input-bordered w-full h-12 rounded-2xl bg-base-200 border-none transition-all font-medium"
                    placeholder="Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
              {/* <div className="flex gap-4">
                <div className="form-control w-1/2">
                  <label className="label text-[10px] font-black uppercase tracking-widest text-base-content/40 mb-1 px-1">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    className="input input-bordered w-full h-12 rounded-2xl bg-base-200 border-none transition-all font-medium"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label text-[10px] font-black uppercase tracking-widest text-base-content/40 mb-1 px-1">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    className="input input-bordered w-full h-12 rounded-2xl bg-base-200 border-none transition-all font-medium"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}

              <div className="form-control w-full">
                <label className="label text-[10px] font-black uppercase tracking-widest text-base-content/40 mb-1 px-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full h-12 rounded-2xl bg-base-200 border-none transition-all font-medium"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label text-[10px] font-black uppercase tracking-widest text-base-content/40 mb-1 px-1">Create Password</label>
                <div className="relative group">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-12 h-12 rounded-2xl bg-base-200 border-none transition-all font-medium"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/30 hover:text-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="py-2">
                <label className="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-lg" required />
                  <span className="label-text text-base-content/60 text-xs">I agree to the <Link className="text-primary font-bold hover:underline">Terms of Service</Link> and <Link className="text-primary font-bold hover:underline">Privacy Policy</Link></span>
                </label>
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full h-14 rounded-2xl shadow-xl shadow-primary/30 text-white font-bold tracking-wider text-xl transition-all ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Sign Up"}
              </button>
            </form>

            <p className="mt-8 text-center text-base-content/60 font-medium">
              Already have an account? <Link to="/login" className="text-primary font-bold hover:underline ml-1">Log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
