import { useState, useRef } from 'react'
import Header from '../components/Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/userSlice'
import { USER_DEFAULT_AVATER } from '../utils/constants';
import { LANGUAGES, SITE_CONTENT } from '../utils/language';

const Login = () => {
    const userDispatch = useDispatch();
    const language = useSelector((store) => store.setting.language);

    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const fullnameRef = useRef(null);



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
                                    <input ref={fullnameRef} type="text" name="fullname" id="fullname" className='form_field_input' placeholder={SITE_CONTENT.fullname[language]} />
                                </div>}
                                <div className='form_field_row'>
                                    <label className='form_label' htmlFor="email">{SITE_CONTENT.email[language]}</label>
                                    <input ref={emailRef} type="email" name="email" id="email" className='form_field_input' placeholder={SITE_CONTENT.email[language]} />
                                </div>
                                <div className='form_field_row'>
                                    <label className='form_label' htmlFor="password">{SITE_CONTENT.password[language]}</label>
                                    <input ref={passwordRef} type="password" name="password" id="password" className='form_field_input' placeholder={SITE_CONTENT.password[language]} />
                                </div>
                                <div className='form_field_row'>
                                    <button type="submit" className='submit_btn login_btn' onClick={handleButtonClick}>{isSigninForm ? `${SITE_CONTENT.signin[language]}` : `${SITE_CONTENT.signup[language]}`}</button>
                                </div>
                                <p style={{ color: "red" }}>{errorMsg}</p>
                                {isSigninForm ?
                                    <div>{SITE_CONTENT.noaccount[language]} <button className='signup_text_btn' onClick={toggleSignInForm}>{SITE_CONTENT.signup[language]}</button></div> :
                                    <div>{SITE_CONTENT.alreadyhaveaccount[language]} <button className='signup_text_btn' onClick={toggleSignInForm}>{SITE_CONTENT.signin[language]}</button></div>
                                }
                            </form>
                        </div>
                   
                    </div>
                    <div className='login_form_mid_col'>
                        <span>OR</span>
                    </div>
                    <div className='login_form_rgt_col'>
                        ghgfhfg
                    </div>
                </div>

                


            </div>

        </div>
        </>
    )
}

export default Login
