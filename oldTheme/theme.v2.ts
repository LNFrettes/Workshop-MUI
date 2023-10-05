import { ThemeBaseProps } from './index'
import pallete from './pallete'

type TextStyle = {
  fontSize?: number | string
  fontWeight?: number
  color?: string
  textTransform?: string
  letterSpacing?: number
  fontStyle?: string
  lineHeight?: number | string
}

type TextStyles =
  | `heading1`
  | `heading2`
  | `heading3`
  | `subheading1`
  | `subheading2`
  | `subheading3`
  | `body1`
  | `body2`
  | `button1`
  | `notifications`
  | `specialTitle`
  | `title1`
  | `title2`
  | `topMenu`
  | `sideMenu`
  | `colTable1`
  | `colTable2`
  | `link`
  | `card`
  | `general`
  | `filter`
  | `subTitle`
  | `hint`

type TextStylesCustomProps = { [name in TextStyles]: TextStyle }

export interface ThemeProps extends ThemeBaseProps {
  textStyles?: TextStylesCustomProps
}

function getTheme(theme: ThemeProps = {}): ThemeProps {
  const defaultThemeKey = process.env.REACT_APP_DEFAULT_THEME || `blue`

  const blueDefaultColors = {
    primary: pallete.primary.main,
    secondary: pallete.secondary.main,
    tertiary: pallete.tertiary.main,
    gray: pallete.gray.main,
    link: pallete.link.main,
    success: pallete.success.main,
    warning: pallete.warning.main,
    error: pallete.error.main,
    info: pallete.info.main,
    black: pallete.black.main,
  }

  const defaultColors = { blue: blueDefaultColors }
  const colors = theme.colors || defaultColors[defaultThemeKey]

  //                  0,  1,  2,  3,  4,  5,  6,  7,  8
  const fontSizes = [12, 14, 16, 22, 25, 30, 36, 50, 70]

  //             0, 1, 2,  3,  4,  5,   6,  7,    8
  const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

  const lineHeights = [
    `20px`, // 0
    `22px`, // 1
    `24px`, // 2
    `31px`, // 3
    `33px`, // 4
    `38px`, // 5
    `44px`, // 6
    `58px`, // 7
  ]

  const fontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  }

  const breakpoints = [`1279px`, `1439px`, `1919px`, `3839px`]

  const textStyles: TextStylesCustomProps = {
    heading1: {
      fontSize: fontSizes[7],
      lineHeight: lineHeights[7],
    },
    heading2: {
      fontSize: fontSizes[6],
      lineHeight: lineHeights[6],
    },
    heading3: {
      fontSize: fontSizes[5],
      lineHeight: lineHeights[5],
    },
    subheading1: {
      fontSize: fontSizes[4],
      lineHeight: lineHeights[4],
    },
    subheading2: {
      fontSize: fontSizes[3],
      lineHeight: lineHeights[3],
    },
    subheading3: {
      fontSize: fontSizes[2],
      lineHeight: lineHeights[2],
    },
    body1: {
      fontSize: fontSizes[1],
      lineHeight: lineHeights[1],
    },
    body2: {
      fontSize: fontSizes[0],
      lineHeight: lineHeights[0],
    },
    button1: {
      fontSize: fontSizes[0],
      lineHeight: lineHeights[0],
    },
    notifications: {
      fontSize: fontSizes[0],
      lineHeight: lineHeights[0],
    },
    specialTitle: {
      fontWeight: fontWeights[2],
      fontSize: fontSizes[7],
    },
    title1: {
      fontWeight: fontWeights[2],
      fontSize: fontSizes[5],
      color: colors.primary[2],
    },
    title2: {
      fontWeight: fontWeights[1],
      fontSize: fontSizes[5],
      color: colors.primary[2],
    },
    topMenu: {
      fontWeight: fontWeights[1],
      fontSize: fontSizes[4],
    },
    sideMenu: {
      fontWeight: fontWeights[2],
      fontSize: fontSizes[2],
    },
    colTable1: {
      fontWeight: fontWeights[3],
      fontSize: fontSizes[2],
    },
    colTable2: {
      fontWeight: fontWeights[1],
      fontSize: fontSizes[4],
    },
    link: {
      fontWeight: fontWeights[2],
      fontSize: fontSizes[3],
    },
    card: {
      fontWeight: fontWeights[1],
      fontSize: fontSizes[2],
      textTransform: `uppercase`,
      letterSpacing: 3,
    },
    general: {
      fontWeight: fontWeights[0],
      fontSize: fontSizes[2],
    },
    filter: {
      fontWeight: fontWeights[1],
      fontSize: fontSizes[2],
    },
    subTitle: {
      fontWeight: fontWeights[2],
      fontSize: fontSizes[1],
    },
    hint: {
      fontStyle: `italic`,
      fontSize: fontSizes[1],
    },
  }

  const gradients = theme.gradients || [
    `radial-gradient(1029.76px at 50% 50%, #F8F8F8 0%, #BAE8F2 100%)`,
  ]

  return {
    colors,
    fontSizes,
    lineHeights,
    breakpoints,
    textStyles,
    space,
    gradients,
    fontWeights,
    pallete,
    whiteLogoUrl: `https://saltala-assets.s3-sa-east-1.amazonaws.com/logo.png`, //defaultLogo blanco saltala
    colorLogoUrl: `https://saltala-assets.s3-sa-east-1.amazonaws.com/Logo+transicion_Azul.svg`, //defaultLogo color saltala
    favicon: `https://saltala-assets.s3-sa-east-1.amazonaws.com/favicon_saltala.ico`, //defaultFavicon saltala
    ...theme,
  }
}

export default getTheme
