import { Container, CssBaseline, Stack } from "@mui/material";
import ButtonsTemplates from "./examples/ButtonsTemplates";
import TextFieldsTemplates from "./examples/TextFieldsTemplates";
import RangeSliderTemplate from "./examples/RangeSliderTemplate";
import StackTemplates from "./examples/StackTemplates";
import ContainerTemplate from "./examples/ContainerTemplate";
import IconsTemplates from "./examples/IconsTemplates";


function App() {
  
  return (
    <>
    {/* this one is required for normalize css */}
    <CssBaseline/>
    
    <ButtonsTemplates/>
    <TextFieldsTemplates/>
    <StackTemplates />
    <RangeSliderTemplate />
    <ContainerTemplate />
    <IconsTemplates />
    </>
  )
}

export default App
