import { Button } from "@mui/material"
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const IconsTemplates = () => {
  return (
    <>
      <AppRegistrationIcon/>
      <AppRegistrationIcon fontSize="large" color="error"/>
      <Button startIcon={<AppRegistrationIcon />} variant="contained">Outlined</Button>
      <Button endIcon={<AppRegistrationIcon />} variant="outlined">Outlined</Button>
    </>
  )
}

export default IconsTemplates
