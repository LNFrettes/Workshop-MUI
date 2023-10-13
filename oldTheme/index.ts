import * as CSS from 'csstype'
import { Theme, ObjectOrArray } from 'styled-system'
import ThemeV1, { ThemeProps as ThemeV1Props } from './theme.v1'
import ThemeV2, { ThemeProps as ThemeV2Props } from './theme.v2'

type PalleteColorProps = {
  main?: string
  border?: string
  background?: string
  [0]?: string
  [1]?: string
  [2]?: string
  [3]?: string
  [4]?: string
}

type PalleteTypesProps =
  | `primary`
  | `secondary`
  | `tertiary`
  | `gray`
  | `hint`
  | `link`
  | `success`
  | `warning`
  | `error`
  | `info`
  | `black`

type PalleteProps = { [name in PalleteTypesProps]: PalleteColorProps }

export interface ThemeBaseProps {
  gradients?: string | string[]
  colors?: CSS.Properties
  fontSizes?: number[]
  lineHeights?: string[]
  breakpoints?: string[]
  space?: number[]
  fontWeights?: ObjectOrArray<number | string>
  pallete?: PalleteProps
  buttons?: { disabled?: CSS.Properties }
  whiteLogoUrl?: string
  colorLogoUrl?: string
  favicon?: string
}

type ThemeProps = { v1?: ThemeV1Props; v2?: ThemeV2Props }

const selectorTheme: Record<string, any> = {
  v1: ThemeV1,
  v2: ThemeV2,
}
const getTheme = (theme: Theme = {}, version = `v1`): ThemeProps => selectorTheme[version](theme)

export default getTheme
