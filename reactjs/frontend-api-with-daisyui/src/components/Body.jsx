import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { addAuthUser } from '../utils/slices/authSlice'
import { API_BASE_URL } from '../utils/constants'

const Body = () => {

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
      if(err.status === 400 || err.status === 401){
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
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Body
