import { Stack } from '@mui/material'

const StackTemplates = () => {
  return (
    <>
    {/* 
    1 = 8px
    2 = (8px * 2 ) 16px 
    useage: Stack befault css: flex-direction: column
    Example 01: gap={2} // 16px
    Example 02: gap={"10px"}
    */}
    <Stack 
    direction={{ xs: "column", sm: "row" }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <div style={{background:"gray"}}>Stack 01</div>
      <div style={{background:"gray"}}>Stack 02</div>
      <div style={{background:"gray"}}>Stack 03</div>
    </Stack>
    </>
  )
}

export default StackTemplates;
