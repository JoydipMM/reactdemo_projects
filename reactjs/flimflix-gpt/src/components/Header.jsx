import React, {useEffect, useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SITE_LOGO } from '../utils/constants';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../store/userSlice';
import { toggleLogin } from '../store/settingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGES, SITE_CONTENT } from '../utils/language';
import Loading from './Loader';
import LanguageDropdown from './LanguageDropdown';
import { genresFetch } from '../store/moviesSlice';


const Header = () => {
  const dispatch = useDispatch();
  const userStoreUser = useSelector((store) => store.user);
  const language = useSelector((store) => store.setting?.language);
  const isInLoginPage = useSelector((store) => store.setting?.gotologin);
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

  const toggleLoginEvent = (status) =>{
      dispatch(toggleLogin(status));
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

  dispatch(genresFetch());

  // Unsubscribe when component unmounts
  return () => unsubscribe();
  }, [])


  useEffect(() => {
    if (isInLoginPage) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [isInLoginPage]);


  return (
    <>
      {isLoading && <Loading /> }
      <header className='main_header'>
        <div className='common_container'>
          <div className='main-header-inner-row'>
            <div className='hdr_lft_col'>
              <Link to={!userStoreUser? "/": "/browse"} className='header_logo'><img src={SITE_LOGO} alt="" /></Link>
            </div>

            { userStoreUser &&  <>
            <div className='hdr_mid_col'>
              <div className='hdr_menu_wrap_box'>
                <ul className='hdr_menu_list'>
                  {/* <li><NavLink to={"/"}>{SITE_CONTENT.home[language]}</NavLink></li> */}
                  <li><NavLink to={"/browse"}>{SITE_CONTENT.browse[language]}</NavLink></li>
                </ul>
              </div>
            </div>
            </> }

            <div className='hdr_rgt_col'>
              <LanguageDropdown/>
              {" | "}
              {(!userStoreUser && !isInLoginPage) &&  <>
                <button className='common_button' onClick={()=>toggleLoginEvent(true)}>
                  {SITE_CONTENT.signin[language]} / {SITE_CONTENT.signup[language]}
                </button>
              </>}
              {userStoreUser &&  <>
              <button className='common_button'>{SITE_CONTENT.search[language]}</button>
              {" | "}
              <div>
                <img width={20} src={userStoreUser?.photoURL} alt="" />
                <span>{userStoreUser?.displayName}</span>
              </div>
              <button onClick={logoutEvent}>{SITE_CONTENT.logout[language]}</button></>}
            </div>
          </div>
          
        </div>
      </header>
    </>
  )
}

export default Header
