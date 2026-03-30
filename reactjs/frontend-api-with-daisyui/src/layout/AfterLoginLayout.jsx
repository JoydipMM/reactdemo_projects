import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { addAuthUser } from '../utils/slices/authSlice'
import { API_BASE_URL } from '../utils/constants'

const AfterLoginLayout = () => {

  const getAuthUser = useSelector((store) => store.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const getLoggedUer = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/profile/view`, { withCredentials: true });
      dispatch(addAuthUser(res.data.user));
    } catch (err) {
      if (err.status === 400 || err.status === 401 || !getAuthUser) {
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!getAuthUser) {
      getLoggedUer();
    } else {
      setIsLoading(false);
    }
  }, []);


  return (
    <>
      <Header />
      <section className='w-full relative py-3 px-3 pb-24'>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-base-content/60 font-medium animate-pulse">Verifying session...</p>
          </div>
        ) : (
          <>
            <div className='w-full flex justify-center mb-8 overflow-x-auto no-scrollbar'>
              <div className="flex bg-base-200 p-1.5 rounded-full shadow-inner gap-1 px-2 shrink-0">
                <NavLink to="/" className={({ isActive }) => `btn btn-sm sm:btn-md rounded-full border-none transition-all duration-300 gap-2 ${isActive ? "btn-primary shadow-lg scale-105" : "btn-ghost hover:bg-base-300"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span className="hidden sm:inline">Feed</span>
                </NavLink>

                <NavLink to="/connections" className={({ isActive }) => `btn btn-sm sm:btn-md rounded-full border-none transition-all duration-300 gap-2 ${isActive ? "btn-primary shadow-lg scale-105" : "btn-ghost hover:bg-base-300"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <span className="hidden sm:inline">Connections</span>
                </NavLink>

                <NavLink to="/requests" className={({ isActive }) => `btn btn-sm sm:btn-md rounded-full border-none transition-all duration-300 gap-2 ${isActive ? "btn-primary shadow-lg scale-105" : "btn-ghost hover:bg-base-300"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                  <span className="hidden sm:inline">Requests</span>
                </NavLink>
              </div>
            </div>

            <Outlet />
          </>
        )}
      </section>
      <Footer />
    </>
  )
}

export default AfterLoginLayout
