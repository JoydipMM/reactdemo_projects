import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';

export const Loading = () => {
  return <><div style={{width:"100%", height:"100%", position:"fixed", top:"0px", left:"0px", background:"#fff", fontSize:"50px", display:"flex", justifyContent:"center", alignItems:"center", color:"#000", zIndex:"9999"}}>Loading...</div></>
}

const Header = () => {
  const dispatch = useDispatch();
  const userStoreUser = useSelector((store) => store.user);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const logoutEvent = () =>{
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      dispatch(removeUser(null));
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
  }


  useEffect(()=>{
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(addUser({ uid, email, displayName, photoURL }));
      navigate("/browse");
      setIsLoading(false);
    } else {
      dispatch(removeUser());
      navigate("/");
      setIsLoading(false);
    }
  });

  // Unsubscribe when component unmounts
  return () => unsubscribe();
  }, [])


  return (
    <>
      {isLoading && <Loading /> }
      <NavLink to={"/"}>Home</NavLink>
      {/* <NavLink to={"/about"}>About</NavLink> */}
      {" | "}
      <NavLink to={"/browse"}>Browse</NavLink>
      {userStoreUser &&  <>
      {" | "}
      <button>GPT search</button>
      
      <div>
        <img width={20} src={userStoreUser?.photoURL} alt="" />
        <span>{userStoreUser?.displayName}</span>
        </div>
      <button onClick={logoutEvent}>Logout</button></>}
      <br/>
      <br/>
    </>
  )
}

export default Header
