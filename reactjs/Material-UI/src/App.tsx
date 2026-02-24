import { Container, createTheme, CssBaseline, Stack, ThemeProvider, Typography } from "@mui/material";
import ButtonsTemplates from "./examples/ButtonsTemplates";
import TextFieldsTemplates from "./examples/TextFieldsTemplates";
import RangeSliderTemplate from "./examples/RangeSliderTemplate";
import StackTemplates from "./examples/StackTemplates";
import ContainerTemplate from "./examples/ContainerTemplate";
import IconsTemplates from "./examples/IconsTemplates";
import ReuseableComponent from "./examples/ReuseableComponent";
import CustomStyled from "./examples/CustomStyled";
import { blue, red } from "@mui/material/colors";


const customTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "4rem",
      color: "blue",
    },
    button: {
      fontSize: "1.5rem" // we can also change the global button size here like this
    }
  },
  components: {
    MuiButton:{
      defaultProps: {
        variant: "contained" // set default variant
      },
      // styleOverrides is used inside the theme to globally customize the default styles of any MUI component. 
      // Instead of styling each component manually, you override it once in the theme.
      styleOverrides: {
        root:{ // set global customization
          //fontSize: "1.5rem",
          variants:[ // set global customized variants
            {
              props:{
                variant:"outlined", // this is a rule
                color:"secondary", // this is a rule
              }, // if this props is passed then this style will be applied. So if variant is "outlined" and color is "secondary" then the font size will be 0.5rem
              style:{
                fontSize:"0.8rem"
              } 
            },
            {
              props:{
                variant:"dashed", // this is a rule
              },
              style:{
                border:`4px dashed ${red[500]}`,
              }
            }
          ]
        } 
      }
    }
  }
});

const customInnerTheme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "4rem",
      color: "red",
    },
  }
});


function App() {
  
  return (
    <ThemeProvider theme={customTheme}>
    {/* this one is required for normalize css */}
    <CssBaseline/>
    <Container maxWidth="lg">
      <ButtonsTemplates/>
      <TextFieldsTemplates/>
      <StackTemplates />
      <ContainerTemplate />
      <IconsTemplates />
      <RangeSliderTemplate />
      <ReuseableComponent />
      <CustomStyled />
    </Container>

    <Typography variant="h1">Hello</Typography>

    <ThemeProvider theme={customInnerTheme}>
      <Typography variant="h1">Nested ThemeProvider Hello</Typography>
    </ThemeProvider>


    </ThemeProvider>
  )
}

export default App
