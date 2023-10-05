import { PaletteColor, PaletteColorOptions } from '@mui/material'

// eslint-disable-next-line quotes
declare module '@mui/material/styles' {
  interface Palette {
    primary: PaletteColor
  }
  interface PaletteOptions {
    primary?: PaletteColorOptions
  }
}
//cambiar los colores de acuerdo a la pagina
const primary = {
  dark: `#5e548e`,
  main: `#9f86c0`,
  light: `#e0b1cb`,
}

const palette = {
  primary,
}

export default palette