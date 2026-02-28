import { alpha, Button, Container, createTheme, CssBaseline, FormControlLabel, Grid, Radio, RadioGroup, Stack, ThemeProvider, Typography, useColorScheme, useMediaQuery } from "@mui/material";
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
  breakpoints: {
    values: {
      // keep existing ones with default values or we can change them
      xs: 0, 
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // custom ones
      mobile: 0, // we need to module augmentation to use this custom key name for responsive breakpoints
      tablet: 768, // same this
      desktop: 1800 // same this
    }
  },
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

  const isTablet = useMediaQuery("(min-width: 768px)");
  
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


    <br/>
    <br/>
    

  <Container maxWidth="desktop">
    <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, desktop: 4}}>
          <Button fullWidth>Grid 01 xs: 12, md: 6, desktop: 4</Button>
        </Grid>
        {/* <Grid size={{ xs: 12, md: 6}}>
          <Button fullWidth>sdsd</Button>
        </Grid> */}
        <Grid size="grow">
          <Button fullWidth>Grid Size Grow</Button>
        </Grid>
        <Grid size={{ xs: 12, md: 12}}>
          <Button fullWidth>Grid 02 normal breakdown</Button>
        </Grid>
      </Grid>
  </Container>
      <br/>
    <br/>    
  <Container maxWidth="desktop">
    <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12}}>
          <Button sx={(theme)=>({
            backgroundColor: "green",
            [theme.breakpoints.between("md", "lg")]:{
              backgroundColor: "purple"
            },
            [theme.breakpoints.down("md")]:{
              backgroundColor: "pink",
              color: "red",
              fontSize: "10px"
            }
          })}>
            Max and min width breakdown button</Button>
        </Grid>
      </Grid>
  </Container>
    

<br/>
    <br/>

    { isTablet? "Tablet" : "mobile" }
<br/>
    <br/>


    <ThemeProvider theme={customInnerTheme}>
      <Typography variant="h1">Nested ThemeProvider Hello</Typography>
    </ThemeProvider>


    </ThemeProvider>
  )
}

export default App
