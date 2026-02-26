import { TextField } from '@mui/material';
import { useState } from 'react';

const TextFieldsTemplates = () => {
  const [inputValue, setInputValue] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  return (
    <>
      <TextField />
      <br/>
      <br/>
      <TextField 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)}
      error={!inputValue}
      disabled={isLoading} />
    </>
  )
}

export default TextFieldsTemplates
