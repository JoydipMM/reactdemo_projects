import React, {useCallback, useEffect, useRef, useState} from 'react';
import style from './GeneratePasswordStyle.module.css';

const GeneratePassword = () => {
    const [ length, setLength ] = useState(8);
    const [ numberAllowed, setNumberAllowed ] = useState(false);
    const [ charAllowed, setCharAllowed ] = useState(false);
    const [ password, setPassword ] = useState("");
    //useRef hook
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=>{
      let pass= "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "0123456789";
      if(charAllowed) str += "!@#$%&*";

      for(let i=1;i<=length; i++){
        let char = Math.floor((Math.random() * str.length) + 1);
        pass += str.charAt(char);
        //console.log(pass);
      }
      setPassword(pass);

    },[length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(()=>{
      passwordGenerator();
    },[length, numberAllowed, charAllowed,passwordGenerator])
    
  return (
    <div>
      Ganarate Password
      <div className={`${style.generate_box}`}>
        <div>
          <input 
          type='text' 
          readOnly
          placeholder='password'
          value={password}
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className={`${style.fields_row}`}>
          
          <div className={`${style.field_col} ${style.range_field}`}>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className={`${style.field_col} ${style.number_field}`}>
            <label>
              <input
                type='checkbox'
                value={numberAllowed}
                onChange={()=>setNumberAllowed(prev => !prev)}
              /><span>Number</span>
            </label>
          </div>

          <div className={`${style.field_col} ${style.char_field}`}>
            <label>
              <input
                type='checkbox'
                value={charAllowed}
                onChange={()=>setCharAllowed(prev => !prev)}
              /><span>Special Charecter</span>
            </label>
          </div>


        </div>

      </div>
    </div>
  )
}

export default GeneratePassword
