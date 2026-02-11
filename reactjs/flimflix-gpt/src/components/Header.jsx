import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';

const Header = () => {

  const userStoreUser = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutEvent = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      dispatch(removeUser(null));
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/browse"}>Browse</NavLink>
      {userStoreUser &&  <><div>
        <img width={20} src={userStoreUser?.photoURL} alt="" />
        <span>{userStoreUser?.displayName}</span>
        </div>
      <button onClick={logoutEvent}>Logout</button></>}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Header
