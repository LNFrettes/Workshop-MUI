import { ThemeBaseProps } from './index'

type TextStyle = {
  fontSize?: number
  fontWeight?: number
  color?: string
  textTransform?: string
  letterSpacing?: number
  fontStyle?: string
  lineHeight?: number
}

type TextStyles =
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
  const defaultThemeKey = process.env.REACT_APP_DEFAULT_THEME || `red`
  const blueDefaultColors = {
    primary: [
      `#004266 `, //0
      `#0B789A`, //1
      `#1890FF`, //2
      `#0B789A`, //3
      `#004266`, //4
      `#1E3264`, //5
    ],
    secundary: [`#00C1D0`, `#88c8fb`],
    tertiary: [`#52C41A`, `#faad14`, `#FF4D4F`, `#5CDBD3`, `#0E4779`],
    gray: [`#EEEDEC`, `#C0BFC0`, `#9EA2A8`, `#4A4A4A`],
    error: `#FF4D4F`,
    errorContainer: [`#FFA39E`, `#FFF1F0`],
    hintContainer: [`#91D5FF`, `#E6F7FF`],
    successContainer: [`#B7EB8F`, `#F6FFED`],
    warningContainer: [`#FFE58F`, `#FFFBE6`],
    success: `#328A0E`,
    warning: `#F5A723`,
    info: `#129DC8`,
    //    0: Green    1: Blue    2: Red     3: Yellow
    tags: [`#52C41A`, `#1890FF`, `#FF4D4F`, `#FAAD14`],
  }
  const redDefaultColors = {
    primary: [
      `#231942 `, //0
      `#5e548e`, //1
      `#9f86c0`, //2
      `#5e60ce`, //3
      `#be95c4`, //4
      `#e0b1cb`, //5
    ],
    secundary: [`#2b2d42`, `#e0b1cb`],
    tertiary: [`#52C41A`, `#faad14`, `#FF4D4F`, `#5CDBD3`],
    gray: [`#EEEDEC`, `#C0BFC0`, `#9EA2A8`, `#4A4A4A`, `#F5F5F5`],
    error: `#FF4D4F`,
    errorContainer: [`#FFA39E`, `#FFF1F0`],
    hintContainer: [`#91D5FF`, `#E6F7FF`],
    successContainer: [`#B7EB8F`, `#F6FFED`],
    warningContainer: [`#FFE58F`, `#FFFBE6`],
    success: `#328A0E`,
    warning: `#F5A723`,
    info: `#129DC8`,
    //    0: Green    1: Blue    2: Red     3: Yellow
    tags: [`#52C41A`, `#1890FF`, `#FF4D4F`, `#FAAD14`],
  }
  const defaultColors = { red: redDefaultColors, blue: blueDefaultColors }
  const colors = theme.colors || defaultColors[defaultThemeKey]

  //                  0,  1,  2,  3,  4,  5,  6,  7,  8
  const fontSizes = [12, 14, 16, 18, 20, 24, 32, 42, 70]

  // 0: light, 1: regular, 2: medium, 3: bold
  const fontWeights = [300, 400, 700, 900]

  //             0, 1, 2,  3,  4,  5,   6,  7,    8
  const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

  const breakpoints = [`1279px`, `1439px`, `1919px`, `3839px`]

  const textStyles: TextStylesCustomProps = {
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

  const buttons = {
    disabled: {
      backgroundColor: colors.gray[1],
      color: `white`,
      cursor: `not-allowed`,
    },
  }

  return {
    colors,
    fontSizes,
    breakpoints,
    textStyles,
    space,
    gradients,
    fontWeights,
    buttons,
    whiteLogoUrl: `https://saltala-assets.s3-sa-east-1.amazonaws.com/logo.png`, //defaultLogo blanco saltala
    colorLogoUrl: `https://saltala-assets.s3-sa-east-1.amazonaws.com/Logo+transicion_Azul.svg`, //defaultLogo color saltala
    favicon: `https://saltala-assets.s3-sa-east-1.amazonaws.com/favicon_saltala.ico`, //defaultFavicon saltala
    ...theme,
  }
}

export default getTheme
