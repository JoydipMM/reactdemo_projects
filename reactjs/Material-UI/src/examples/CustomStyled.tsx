// import styled from '@emotion/styled'
import { styled } from "@mui/material/styles";
import { Slider, type SliderProps } from '@mui/material'

// theme is a object which is initial config provided by MUI
const CustomSliderStyle = styled(Slider)<SliderProps>(({theme}) => ({
    // width: "80px", // we can use like this or like below
    width: theme.spacing(10), // 10 * 8px = 80px
    color: theme.palette.warning.dark,
    "& .MuiSlider-thumb": {
      backgroundColor: theme.palette.success.main,
      ":hover": {
        backgroundColor: theme.palette.success.dark
      }
    },
    "& .MuiSlider-rail": {
      backgroundColor: theme.palette.warning.main
    },
    "& .MuiSlider-track": {
      backgroundColor: theme.palette.warning.dark,
      borderColor: theme.palette.warning.dark,
    }
}))

// custom props merge with default props
type CustomSliderStyleProps = SliderProps & {
    error?: boolean // optional custom props type
    // to pass this custom props type we need to pass this type as second argument with base component. example: styled(Slider, {})<CustomSliderStyleProps>
}


// passing custom props with custom style component
const CustomSliderStyleWithCustomPropsType = styled(Slider, {
    shouldForwardProp: (prop) => prop !== "error"
    // shouldForwardProp: When you create a styled component, all props are normally forwarded to the underlying DOM element. But error is NOT a valid HTML attribute. React will show warning: React does not recognize the error prop on a DOM element.
    // This Line Do NOT pass the error prop to the DOM element. error will be used only for styling logic and It will NOT appear in the final HTML.
})<CustomSliderStyleProps>(({theme, error}) => ({
    // width: "80px", // we can use like this or like below
    width: theme.spacing(10), // 10 * 8px = 80px
    color: theme.palette.warning.dark,
    "& .MuiSlider-thumb": {
      backgroundColor: theme.palette.success.main,
      ":hover": {
        backgroundColor: theme.palette.success.dark
      }
    },
    "& .MuiSlider-rail": {
      backgroundColor: theme.palette.warning.main
    },
    "& .MuiSlider-track": {
        // dynamic color based on error prop
      backgroundColor: error ? theme.palette.secondary.dark : theme.palette.error.dark,
      borderColor: error ? theme.palette.secondary.dark : theme.palette.warning.dark,
    }
}))

const CustomStyled = () => {

    const posts = [1, 2, 3, 4, 5, 6];
  return (
    <>
    <br/>
    {/* we can use like this or above CustomSliderStyle */}
      <Slider sx={(theme) => ({
        width: theme.spacing(10),
        color: theme.palette.error.main
      })} />

    <br/>
      <CustomSliderStyle/>
    <br/> 
      <CustomSliderStyleWithCustomPropsType />
      <br/>
      <CustomSliderStyleWithCustomPropsType error />

    </>
  )
}

export default CustomStyled
