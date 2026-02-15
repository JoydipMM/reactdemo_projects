import { useState, useRef } from 'react'
import Header from '../components/Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/userSlice'
import { USER_DEFAULT_AVATER, GOOGLELOGO } from '../utils/constants';
import { LANGUAGES, SITE_CONTENT } from '../utils/language';
import { Link } from 'react-router-dom';
import * as Icons from '../utils/icons';

const Login = () => {
    const userDispatch = useDispatch();
    const language = useSelector((store) => store.setting?.language);

    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const fullnameRef = useRef(null);


    const togglepasswordEvent = () => {
        setShowPassword((prev) => !prev);
    }


    const toggleSignInForm = () => {
        setIsSigninForm((prev) => !prev);
    }


    const handleButtonClick = (e) => {
        e.preventDefault();
        //console.log(emailRef.current.value);
        //console.log(passwordRef.current.value);
        const validateMsg = checkValidData(
            !isSigninForm && fullnameRef.current?.value,
            emailRef.current.value,
            passwordRef.current.value);
        console.log(validateMsg);
        setErrorMsg(validateMsg);

        if (validateMsg) return; //return if validateMsg is not null

        if (!isSigninForm) {
            // signup / register
            createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    // update user profile
                    updateProfile(user, {
                        displayName: fullnameRef.current?.value, photoURL: USER_DEFAULT_AVATER
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        userDispatch(addUser({ uid, email, displayName, photoURL }));
                        //navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error.message);
                    });

                    // if sign up success then save the user object in redux store - this step added in Body component
                    // redirect to browse page


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setErrorMsg(errorCode, errorMessage);

                });
        } else {
            // sign in
            signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // if sign in success then save the user object in redux store - this step added in Body component
                    // redirect to browse page
                    //navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setErrorMsg(errorCode, errorMessage);
                });
        }



    }

    return (
        <>
        <Header />
        {/* loin section start */}
        <div className='loginpage'>
            <div className='login_container'>

                <div className='login_form_full_box'>
                    <div className='login_form_lft_col'>

                        <div className='login_hdng_wrap'>
                            <h4 className='login_form_title'>{isSigninForm ? `${SITE_CONTENT.signintitle[language]}` : `${SITE_CONTENT.signuptitle[language]}`}</h4>
                        </div>

                        <div>
                            <form onSubmit={(e) => e.preventDefault()}>

                                {!isSigninForm && <div className='form_field_row'>
                                    <label className='form_label' htmlFor="fullname">{SITE_CONTENT.fullname[language]}</label>
                                    <div className='w-full relative'>
                                        <span className='form_icon_button'><Icons.userIcon /></span>
                                        <input ref={fullnameRef} type="text" name="fullname" id="fullname" className='form_field_input' placeholder={SITE_CONTENT.fullname[language]} />
                                    </div>
                                </div>}

                                <div className='form_field_row'>
                                    <label className='form_label' htmlFor="email">{SITE_CONTENT.email[language]}</label>
                                    <div className='w-full relative'>
                                        <span className='form_icon_button'><Icons.mailIcon /></span>
                                        <input ref={emailRef} type="email" name="email" id="email" className='form_field_input' placeholder={SITE_CONTENT.email[language]} />
                                    </div>
                                </div>

                                <div className='form_field_row'>
                                    <label className='form_label' htmlFor="password">{SITE_CONTENT.password[language]}</label>
                                    <div className='w-full relative'>
                                        <span className='form_icon_button'><Icons.lockIcon width={20} height={20} /></span>
                                        <input ref={passwordRef} type={showPassword ? "text" : "password"} name="password" id="password" className='form_field_input' placeholder={SITE_CONTENT.password[language]} />
                                        <button className='form_icon_button right cursor-pointer'onClick={togglepasswordEvent}>
                                            {showPassword ? <Icons.eyeHideIcon width={20} height={20} /> : <Icons.eyeShowIcon width={20} height={20} /> }
                                        </button>
                                    </div>
                                </div>

                                <div className='form_field_row row_view'>
                                    <p className='error_msg'>{errorMsg}</p>
                                    <Link to="/forgot-password" className='normal_text_btn text-red-800 forgotpass_text_btn'>{SITE_CONTENT.forgotpassword[language]}</Link>
                                </div>

                                <div className='form_field_row'>
                                    <button type="submit" className='common_button submit_btn login_btn' onClick={handleButtonClick}>{isSigninForm ? `${SITE_CONTENT.signin[language]}` : `${SITE_CONTENT.signup[language]}`}</button>
                                </div>
                                
                                {isSigninForm ?
                                    <div className='signpage_text_link'>{SITE_CONTENT.noaccount[language]} <button className='normal_text_btn text-red-800 signup_text_btn' onClick={toggleSignInForm}>{SITE_CONTENT.signup[language]}</button></div> :
                                    <div className='signpage_text_link'>{SITE_CONTENT.alreadyhaveaccount[language]} <button className='normal_text_btn text-red-800 signup_text_btn' onClick={toggleSignInForm}>{SITE_CONTENT.signin[language]}</button></div>
                                }

                            </form>
                        </div>
                    </div>

                    <div className='login_form_mid_col' style={{display:"none"}}>
                        <span>OR</span>
                    </div>

                    <div className='login_form_rgt_col' style={{display:"none"}}>
                        <button className='common_button white google_btn w-full'><img src={GOOGLELOGO} alt="Google Logo" />{SITE_CONTENT.signinwithgoogle[language]}</button>
                    </div>

                    <div className='login_quick_link_row'>
                        <ul className='dot_links'>
                            <li><Link to="/">{SITE_CONTENT.termsofuse[language]}</Link></li>
                            <li><Link to="/">{SITE_CONTENT.privacypolicy[language]}</Link></li>
                            <li><Link to="/">{SITE_CONTENT.contactsupport[language]}</Link></li>
                        </ul>
                    </div>

                </div>

                


            </div>

        </div>
        {/* loin section ended */}
        
        </>
    )
}

export default Login
