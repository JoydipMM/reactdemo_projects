import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { addAuthUser } from '../utils/slices/authSlice'
import { API_BASE_URL } from '../utils/constants'

const AfterLoginLayout = () => {

  const getAuthUser = useSelector((store)=>store.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLoggedUer = async () => {
    try{
      const res = await axios.get(`${API_BASE_URL}/profile/view`, { withCredentials:true });
      //console.log("data: ", res.data.user);
      dispatch(addAuthUser(res.data.user));
      navigate("/");
    }catch(err){
      //console.log(err.status);
      if(err.status === 400 || err.status === 401 || getAuthUser === null){
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    if(!getAuthUser){
      getLoggedUer();
    }
  }, []);


  return (
    <>
      <Header/>
      <section className='w-full relative py-3 px-3'>

        <div className='w-full relative'>
          <div className="join mb-5">
            <NavLink to="/" className={({ isActive }) =>`btn join-item ${isActive ? "btn-primary" : "btn-neutral"}`}>Posts</NavLink>
            <NavLink to="/connections" className={({ isActive }) =>`btn join-item ${isActive ? "btn-primary" : "btn-neutral"}`}>Connections</NavLink>
            {/* <Link className="btn btn-neutral join-item">Button</Link> */}
          </div>
        </div>


        <Outlet/>


      </section>
      <Footer/>
    </>
  )
}

export default AfterLoginLayout
