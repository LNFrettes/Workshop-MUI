import { BorderProps, BackgroundProps } from 'styled-system'
import { ThemeProps } from '../../../oldTheme/theme.v2'


interface StyleProps extends BackgroundProps, BorderProps { }

export type Variants =
  | `basic-borderless`
  | `basic`
  | `invalidation`
  | `dotted`
  | `danger`
  | `selected`
  | `error`
  | `hint`
  | `success`
  | `warning`

type VariantsMap = { [name in Variants]: StyleProps }

const variants = ({ pallete }: ThemeProps): VariantsMap => {
  const handleContainerStyles = (
    borderStyled: string | null = null,
    borderColor: string | null = null,
    backgroundColor: string | null = null,
  ): StyleProps => {
    let borderProps = {}
    let backgroundProps = {}
    if (borderStyled != null) {
      borderProps = {
        border: 1,
        borderStyle: borderStyled,
        borderColor: borderColor,
      }
    }
    if (backgroundColor != null) {
      backgroundProps = {
        backgroundColor: backgroundColor,
      }
    }
    return {
      ...borderProps,
      ...backgroundProps,
    }
  }

  return {
    'basic-borderless': {
      ...handleContainerStyles(),
    },
    basic: {
      ...handleContainerStyles(`solid`, `RGBA(0, 0, 0, 0.15)`),
    },
    invalidation: {
      ...handleContainerStyles(
        `solid`,
        `RGBA(0, 0, 0, 0.15)`,
        `RGBA(0, 0, 0, 0.04)`,
      ),
    },
    dotted: {
      ...handleContainerStyles(`dashed`, `RGBA(0, 0, 0, 0.15)`),
    },
    danger: {
      ...handleContainerStyles(`solid`, `error`),
    },
    selected: {
      ...handleContainerStyles(`solid`, `primary`),
    },
    error: {
      ...handleContainerStyles(
        `solid`,
        pallete?.error?.border,
        pallete?.error?.background,
      ),
    },
    hint: {
      ...handleContainerStyles(
        `solid`,
        pallete?.hint?.border,
        pallete?.hint?.background,
      ),
    },
    success: {
      ...handleContainerStyles(
        `solid`,
        pallete?.success?.border,
        pallete?.success?.background,
      ),
    },
    warning: {
      ...handleContainerStyles(
        `solid`,
        pallete?.warning?.border,
        pallete?.warning?.background,
      ),
    },
  }
}

export default variants
