import { Button } from "@mui/material"

const ButtonsTemplates = () => {
  return (
    <>
      <Button>Normal</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">contained</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained" href="#text-buttons">Link</Button>
    </>
  )
}

export default ButtonsTemplates
