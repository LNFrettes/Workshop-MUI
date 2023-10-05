import { get } from 'lodash'
import { FC } from 'react'
import styled from 'styled-components'
import {
  compose,
  variant,
  space,
  layout,
  color,
  typography,
  border,
  textStyle,
  position,
  system,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  TextStyleProps,
  PositionProps,
  FlexboxProps,
} from 'styled-system'
export interface BaseTypoProps
  extends Omit<React.HtmlHTMLAttributes<HTMLHeadingElement>, `color`>,
    SpaceProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    TextStyleProps,
    PositionProps,
    FlexboxProps {
  onClick?: () => void
  textDecoration?: string
  textTransform?: string
  whiteSpace?: string
  textOverflow?: string
}

const hexToRgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

function getColorWithOpacity(value, theme): string | null {
  if (!value) {
    return null
  }
  const [key, opacity = null] = value.split(`@`)
  const color = get(theme, key)
  if (color == null) {
    return key
  }
  return opacity == null ? color : hexToRgba(color, opacity)
}

const colorsWithOpacity = system({
  color: {
    property: `color`,
    scale: `colors`,
    transform: getColorWithOpacity,
  },
  backgroundColor: {
    property: `backgroundColor`,
    scale: `colors`,
    transform: getColorWithOpacity,
  },
  borderColor: {
    property: `borderColor`,
    scale: `colors`,
    transform: getColorWithOpacity,
  },
})

const backgroundGradient = system({
  background: {
    property: `background`,
    scale: `gradients`,
  },
})

const Typography: FC<BaseTypoProps> = styled.h1<BaseTypoProps>`
  margin: 0;
  ${compose(
    space,
    variant,
    layout,
    color,
    typography,
    border,
    position,
    textStyle,
    flexbox,
    colorsWithOpacity,
    backgroundGradient,
    system({
      textDecoration: true,
      textTransform: true,
      whiteSpace: true,
      textOverflow: true,
    }),
  )}
  ${({ onClick = null }) => `
    ${onClick == null ? `` : `  cursor: pointer`};
  `}
`

Typography.defaultProps = {
  maxWidth: `100%`,
}

const Typo: FC<BaseTypoProps> = ({
  children,
  textStyle = `general`,
  ...props
}) => {
  return (
    <Typography textStyle={textStyle} {...props}>
      {children}
    </Typography>
  )
}

export default Typo
