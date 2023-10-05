import {
  BorderProps,
  BackgroundProps,
  ColorProps,
  PaddingProps,
  FontSizeProps,
  HeightProps,
  Theme,
} from 'styled-system'

interface StyleProps
  extends HeightProps,
  FontSizeProps,
  PaddingProps,
  BackgroundProps,
  BorderProps,
  ColorProps { }

export type Variants =
  | `primary`
  | `secondary`
  | `dotted`
  | `disabled`
  | `danger`
  | `danger-outlined`
  | `text`
  | `text-danger`

type VariantsMap = { [name in Variants]: StyleProps }

const variants = ({ fontSizes }: Theme, size = `default`): VariantsMap => {
  const handleSizeVariant = (isOutlined = false): StyleProps => {
    const buttonSizes = {
      small: {
        paddingX: `${isOutlined ? 11 - 1 : 11}px`,
        paddingY: `${isOutlined ? 4 - 1 : 4}px`,
        fontSize: `${fontSizes[1]}px`,
      },
      default: {
        paddingX: `${isOutlined ? 13 - 1 : 13}px`,
        paddingY: `${isOutlined ? 8 - 1 : 8}px`,
        fontSize: `${fontSizes[1]}px`,
      },
      large: {
        paddingX: `${isOutlined ? 26 - 1 : 26}px`,
        paddingY: `${isOutlined ? 11 - 1 : 11}px`,
        fontSize: `${fontSizes[2]}px`,
      },
    }
    return buttonSizes[size]
  }

  const handleButtonStyles = (
    fontColor: string,
    backgroundColor: string,
    borderStyled: string | null = null,
    borderColor: string | null = null,
  ): StyleProps => {
    let borderProps = {}
    if (borderStyled != null) {
      borderProps = {
        border: 1,
        borderStyle: borderStyled,
        borderColor: borderColor || fontColor,
      }
    }
    return {
      color: fontColor,
      backgroundColor: backgroundColor,
      ...handleSizeVariant(borderStyled !== null),
      ...borderProps,
    }
  }

  return {
    primary: {
      ...handleButtonStyles(`white`, `primary`),
    },
    secondary: {
      ...handleButtonStyles(`primary`, `white`, `solid`),
    },
    dotted: {
      ...handleButtonStyles(
        `RGBA(0, 0, 0, 0.8)`,
        `white`,
        `dashed`,
        `RGBA(0, 0, 0, 0.15)`,
      ),
    },
    disabled: {
      ...handleButtonStyles(
        `RGBA(0, 0, 0, 0.25)`,
        `RGBA(0, 0, 0, 0.04)`,
        `solid`,
        `RGBA(0, 0, 0, 0.15)`,
      ),
    },
    danger: {
      ...handleButtonStyles(`white`, `error`),
    },
    'danger-outlined': {
      ...handleButtonStyles(`error`, `white`, `solid`),
    },
    text: {
      ...handleButtonStyles(`primary`, `transparent`),
    },
    'text-danger': {
      ...handleButtonStyles(`error`, `transparent`),
    },
  }
}

export default variants
