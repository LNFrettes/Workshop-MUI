import { FC } from 'react'
import styled from 'styled-components'
import buttonVariants, { Variants } from './variants'
import get from 'lodash/get'
import Icon, { IconsOptions } from '@/components/Icon';
import {
  compose,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
  system,
  background,
  BackgroundProps,
  color,
  ColorProps,
  variant,
} from 'styled-system'
interface ButtonProps
  extends Omit<React.HtmlHTMLAttributes<HTMLButtonElement>, `color`>,
    BackgroundProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    TypographyProps,
    ColorProps {
  withShadow?: boolean
  withSmallShadow?: boolean
  textDecoration?: string
  icon?: IconsOptions
  size?: `small` | `default` | `large`
  variant?: Variants
}
const hexToRgba = (hex: string, alpha = 1): string => {
  if (hex) {
    const [r, g, b] = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || []
    return `rgba(${r},${g},${b},${alpha})`
  }
  return ``
}

function getColorWithOpacity(
  value: { split: (arg0: string) => [any, (null | undefined)?] },
  theme: any,
): string | null {
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

const ButtonWrapper: FC<ButtonProps> = styled.button<ButtonProps>`
  outline: none;
  ${compose(
    space,
    layout,
    border,
    position,
    flexbox,
    typography,
    color,
    background,
    colorsWithOpacity,
    backgroundGradient,
    system({ textDecoration: true, cursor: true }),
  )}
  ${({ theme, size }) =>
    variant({
      variants: buttonVariants(theme, size),
    })}
  
  ${({ withSmallShadow = false }) => `
  ${withSmallShadow ? `box-shadow: 0 1px 4px 0 rgba(0,0,0,0.16) !important;` : ``}
  `}
  ${({ withShadow = false }) => `
  ${withShadow ? `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); !important;` : ``}
  `}
`

ButtonWrapper.defaultProps = {
  color: `white`,
  border: `none`,
  maxWidth: `100%`,
  backgroundColor: `primary.2`,
  borderRadius: `3px`,
  fontSize: `3`,
}

type Props = ButtonProps & {
  isLoading?: boolean
  loaderSize?: TypographyProps[`fontSize`]
  loaderColor?: ColorProps[`color`]
  disabled?: boolean
}

const Button: FC<Props> = ({
  children,
  isLoading = false,
  loaderSize = `4`,
  loaderColor = `white`,
  disabled,
  onClick = () => null,
  icon = null,
  variant,
  ...props
}) => {
  const buttonVariant = disabled ? `disabled` : variant
  const aditionalProps: FlexboxProps = isLoading
    ? { justifyContent: `center`, flexDirection: `row`, alignItems: `center` }
    : {}
  return (
    <ButtonWrapper
      {...props}
      {...aditionalProps}
      variant={buttonVariant}
      onClick={disabled || isLoading ? undefined : onClick}
    >
      {isLoading ? (
        <Icon icon="spinner" spin color={loaderColor} fontSize={loaderSize} />
      ) : (
        <>
          {icon !== null ? <Icon icon={icon} marginRight={2} /> : null}
          {children}
        </>
      )}
    </ButtonWrapper>
  )
}



export default Button
