import React from 'react'
import { LANGUAGES as language } from '../constants/language'
import { useSelector, useDispatch } from 'react-redux'
import { changelanguage } from '../../app/settingSlice'

const LanguageDropdown = () => {
    const dispatch = useDispatch();
    const selectedLang = useSelector((store) => store.setting?.language);

    const langEvent = (e) =>{
        //console.log(e.target.value);
        dispatch(changelanguage(e.target.value));
    }
  return (
    <>
    {/* {selectedLang} */}
    <select name="language" id="language" className='bg-black' onChange={langEvent}>
        {language.slice(0,3).map((lang, index) => (
            <option selected={lang.iso_639_1 === selectedLang} key={index} value={lang.iso_639_1}>{lang.name}</option>
        ))}
    </select>
    </>
  )
}

export default LanguageDropdown

