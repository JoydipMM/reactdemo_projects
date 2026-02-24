import { Button } from "@mui/material"

const ButtonsTemplates = () => {
  return (
    <>
      <Button>Normal 01</Button>&nbsp;
      <Button>Normal 02</Button>&nbsp;
      <Button>Normal 03</Button>&nbsp;

      <br/>
      <br/>
      <br/>


      <Button>Global customize variant</Button>&nbsp;

      <br/>
      <br/>
      <Button variant="outlined" color="secondary">Global customize variant</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="dashed" color="secondary">Global customize variant</Button>

      
      <br/>
      <br/>
      {/* <Button variant="outlined">Outlined</Button>
      <Button variant="contained">contained</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained" href="#text-buttons">Link</Button> */}
    </>
  )
}

export default ButtonsTemplates
