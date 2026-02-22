import { Slider } from '@mui/material'

const RangeSliderTemplate = () => {
  return (
    <>
    <br/>
    <br/>
      <Slider defaultValue={30}/>
      <Slider sx={{height: "10px", width: "200px", color: "red"}}/>
      <br/>
      <Slider sx={{
        height: "10px", 
        width: "200px", 
        color: "success.main",
        "& .MuiSlider-thumb":{
          backgroundColor: "red",
          ":hover":{
            backgroundColor: "success.dark"
          }
        },
        "& .MuiSlider-rail":{
          backgroundColor: "warning.main"
        },
        "& .MuiSlider-track":{
          backgroundColor: "warning.dark",
          borderColor: "warning.dark",
        }
        }}/>
      <br/>
      <Slider 
        defaultValue={30}
        disabled
        sx={{
          height: "10px", 
          width: "200px", 
          color: "success.main",
          "&.Mui-disabled":{
            ".MuiSlider-thumb":{
              backgroundColor: "secondary.main",
            }
          },
          "&.Mui-disabled .MuiSlider-rail":{
            backgroundColor: "warning.main"
          },
        }}
      />
    </>
  )
}

export default RangeSliderTemplate
