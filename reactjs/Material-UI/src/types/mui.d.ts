import '@mui/meterial'; // by importing this we tell the typescript that we are using Module Augmentation

// what type of mui library to enhance.
declare module '@mui/material/Button' {
    /*
    this are exported from @mui/meterial/button component. We can add our own types here
    export interface ButtonPropsVariantOverrides {}
    export interface ButtonPropsColorOverrides {}
    export interface ButtonPropsSizeOverrides {}
    */
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}