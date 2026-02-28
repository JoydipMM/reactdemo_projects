import '@mui/material'; // by importing this we tell the typescript that we are using Module Augmentation

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
    interface ButtonPropsColorOverrides {
        customColor: true;
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        customColor: Palette['primary'];
    }

    interface PaletteOptions {
        customColor?: PaletteOptions['primary'];
    }

}


declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        // keep existing ones
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;

        // add custom ones
        mobile: true, 
        tablet: true,
        desktop: true,
    }
}