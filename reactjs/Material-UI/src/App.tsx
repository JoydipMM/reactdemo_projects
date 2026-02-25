import { alpha, Container, createTheme, CssBaseline, FormControlLabel, Radio, RadioGroup, Stack, ThemeProvider, Typography, useColorScheme } from "@mui/material";
import ButtonsTemplates from "./examples/ButtonsTemplates";
import TextFieldsTemplates from "./examples/TextFieldsTemplates";
import RangeSliderTemplate from "./examples/RangeSliderTemplate";
import StackTemplates from "./examples/StackTemplates";
import ContainerTemplate from "./examples/ContainerTemplate";
import IconsTemplates from "./examples/IconsTemplates";
import ReuseableComponent from "./examples/ReuseableComponent";
import CustomStyled from "./examples/CustomStyled";
import { blue, lime, red } from "@mui/material/colors";


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
            },
            {
              props: (props) => props.variant === "dashed" && props.color !== "secondary",
              style:{
                border:`1px dashed ${blue[500]}`,
                color:blue[900],
                fontSize: "20px"
              }
            }
          ]
        } 
      }
    },

    // global css override. this will come under components -> MuiCssBaseline
    MuiCssBaseline: {
      styleOverrides: (theme) => `
      h2 {
        color: ${theme.palette.success.main};
      }
      `
    }
  },
  colorSchemes: {
    // dark: true, // default activation
    // customize dark theme
    dark: {
      palette: {
        primary: {
          //main: "#ff0000" // solid color
          main: alpha("#ff0000", 0.2), // with opacity
        },
        secondary: {
          main: "#00ff00"
        },
        customColor: {
          main: "#ff00ff"
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


function ThemeToggler() {

  const { mode, setMode } = useColorScheme();
  if(!mode) return null;

  return (
    <RadioGroup value={mode} onChange={(e) => setMode(e.target.value as 'light' | 'dark' | 'system')}>
      <FormControlLabel control={<Radio />} label="Light" value="light" />
      <FormControlLabel control={<Radio />} label="Dark" value="dark" />
      <FormControlLabel control={<Radio />} label="System" value="system" />
    </RadioGroup>
  )
}


function App() {
  
  return (
    <ThemeProvider theme={customTheme}>
    {/* this one is required for normalize css */}
    <CssBaseline/>
    <Container maxWidth="lg">

      <ThemeToggler/>





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
    <Typography variant="h2">Hello h2</Typography>

    <ThemeProvider theme={customInnerTheme}>
      <Typography variant="h1">Nested ThemeProvider Hello</Typography>
    </ThemeProvider>


    </ThemeProvider>
  )
}

export default App
