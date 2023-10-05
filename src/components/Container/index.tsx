import React, { FC, forwardRef } from 'react'
import styled from 'styled-components'
import {
  compose,
  background,
  BackgroundProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  position,
  PositionProps,
  grid,
  GridProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
  variant,
  system,
} from 'styled-system'
import Icon from '../Icon'
import variants, { Variants } from './variants'
import { get } from 'lodash'
interface ContainerStyleProps
  extends BackgroundProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    GridProps,
    TypographyProps,
    ColorProps {}
interface IContainerProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, `color`>,
    ContainerStyleProps {
  withShadow?: boolean
  ref?: React.ForwardedRef<HTMLDivElement>
  hoverProps?: ContainerStyleProps
  cursor?: string
  shadow?: string
  variant?: Variants
}

export const setProperty = (
  property: string,
  value: string,
  isImportant = false,
): string => {
  if (value === null) {
    return ``
  }
  return `${property}: ${value} ${isImportant ? `!important;` : ``}`
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

const Container: FC<IContainerProps> = styled.div<IContainerProps>`
  ${compose(
    background,
    space,
    layout,
    flexbox,
    border,
    position,
    grid,
    typography,
    color,
    colorsWithOpacity,
    backgroundGradient,
  )}
  ${({ theme }) =>
    variant({
      variants: variants(theme),
    })}
  ${({ onClick = null, cursor = null, shadow = ``, withShadow = false }) => `
  ${onClick == null ? `` : `cursor: pointer`};
  ${setProperty(`cursor`, `${cursor} !important`)}
  ${
    shadow?.length > 0
      ? `-webkit-box-shadow: ${shadow}; box-shadow: ${shadow};`
      : ``
  }
  ${withShadow ? `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); !important;` : ``}
  `}
  transition: all .5s ease;
  &:hover {
    ${({ hoverProps, ...props }) =>
      compose(
        layout,
        space,
        flexbox,
        border,
        colorsWithOpacity,
      )({ ...props, ...hoverProps })}
  }
`
Container.defaultProps = {
  display: `flex`,
  flexDirection: `row`,
  flexWrap: `wrap`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  maxWidth: `100%`,
}

type LoadingType = `NORMAL` | `OVERLAY`
export type ContainerProps = IContainerProps & {
  isLoading?: boolean
  loaderSize?: TypographyProps[`fontSize`]
  loaderColor?: ColorProps[`color`]
  loadingText?: string
  getLoadingType?: (types: Record<string, LoadingType>) => LoadingType
}
const loadingTypes: Record<string, LoadingType> = {
  normal: `NORMAL`,
  overlay: `OVERLAY`,
}
const ContainerWrapper = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      isLoading = false,
      loaderSize = `4`,
      loaderColor = `primary.0`,
      getLoadingType = () => loadingTypes.normal,
      loadingText = ` `,
      children,
      ...props
    },
    ref,
  ) => {
    if (isLoading) {
      const loadingType = getLoadingType(loadingTypes)
      if (loadingType === loadingTypes.normal) {
        return (
          <Container
            ref={ref}
            {...props}
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
          >
            <Icon
              icon="spinner"
              spin
              color={loaderColor}
              fontSize={loaderSize}
            />
            <Container marginLeft="15px" fontSize="20px">
              {loadingText}
            </Container>
          </Container>
        )
      } else if (loadingType === loadingTypes.overlay) {
        return (
          <Container
            ref={ref}
            {...props}
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
          >
            {children}
            <Container
              width="100%"
              height="100%"
              position="absolute"
              justifyContent="center"
              flexDirection="row"
              alignItems="center"
              top={0}
              left={0}
              backgroundColor="gray.3@0.15"
            >
              <Icon
                icon="spinner"
                spin
                color={loaderColor}
                fontSize={loaderSize}
              />
              <Container marginLeft="15px" fontSize="20px">
                {loadingText}
              </Container>
            </Container>
          </Container>
        )
      }
    }
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    )
  },
)

ContainerWrapper.displayName = `Container `

export default ContainerWrapper
