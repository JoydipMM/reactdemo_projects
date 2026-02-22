import { Container, Stack } from "@mui/material";

const ContainerTemplate = () => {
  return (
    <>
      <Container maxWidth="md">
      <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
        <div style={{background:"gray"}}>element 01</div>
        <div style={{background:"gray"}}>element 02</div>
        <div style={{background:"gray"}}>element 03</div>
      </Stack>
    </Container>
    </>
  )
}

export default ContainerTemplate
