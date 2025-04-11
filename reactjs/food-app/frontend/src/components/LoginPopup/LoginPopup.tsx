import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from "axios"


const LoginPopup = ({setShowLogin}) => {

  const {url} = useContext(StoreContext);

    const [currentLogState, setCurrentLogState] = useState("Login");
    const [data, setData] = useState({
      name: "",
      email: "",
      password: ""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      // set value in state variable
      setData((data)=>({...data, [name]:value}))
    }

    const onLogin = async (event) => {
      event.preventDefault();
      let newUrl = url;
      if(currentLogState==="Login"){
        newUrl += "/api/user/login"

      }else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl, data);

      if(response.data.success){
        //6:27:58
      }
    }

    useEffect(()=>{
      console.log(data)
    }, [data])


  return (
    <div>
        <form onSubmit={onLogin}>
            <h3>{currentLogState}</h3>
            <button onClick={()=>setShowLogin(false)}>close</button>

            <div className="loginpoup-form">
                {currentLogState==="Login"?<></>:<input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Your Name" />}
                <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email" />
                <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" />
                <button type="submit">{currentLogState==="Sign up"?"Create an account": "Login"}</button>

                {currentLogState==="Login"? <p>New User ? <span onClick={()=>setCurrentLogState("Sign Up")}><b><u>Click here</u></b></span></p>
                : <p>Already have an acount <span onClick={()=>setCurrentLogState("Login")}><b><u>Click here</u></b></span></p>
                }
            </div>
        </form>
    </div>
  )
}

export default LoginPopup
