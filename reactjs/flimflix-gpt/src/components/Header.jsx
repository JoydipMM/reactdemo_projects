import React, {useEffect, useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SITE_LOGO } from '../utils/constants';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGES, SITE_CONTENT } from '../utils/language';

export const Loading = () => {
  return <><div style={{width:"100%", height:"100%", position:"fixed", top:"0px", left:"0px", background:"#fff", fontSize:"50px", display:"flex", justifyContent:"center", alignItems:"center", color:"#000", zIndex:"9999"}}>Loading...</div></>
}

const Header = () => {
  const dispatch = useDispatch();
  const userStoreUser = useSelector((store) => store.user);
  const language = useSelector((store) => store.setting.language);
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
      <header className='main_header'>
        <div className='common_container'>
          <div className='main-header-inner-row'>
            <div className='hdr_lft_col'>
              <Link to={"/"} className='header_logo'><img src={SITE_LOGO} alt="" /></Link>
            </div>
            <div className='hdr_mid_col'>
              <div className='hdr_menu_wrap_box'>
                <ul className='hdr_menu_list'>
                  <li><NavLink to={"/"}>{SITE_CONTENT.home[language]}</NavLink></li>
                  <li><NavLink to={"/browse"}>{SITE_CONTENT.browse[language]}</NavLink></li>
                </ul>
              </div>
            </div>
            <div className='hdr_rgt_col'>
              {userStoreUser &&  <>
              {" | "}
              <button>GPT search</button>
              <div>
                <img width={20} src={userStoreUser?.photoURL} alt="" />
                <span>{userStoreUser?.displayName}</span>
              </div>
              <button onClick={logoutEvent}>Logout</button></>}
            </div>
          </div>
          
        </div>
      </header>
    </>
  )
}

export default Header
