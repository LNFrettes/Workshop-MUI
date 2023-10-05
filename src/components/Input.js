import styled from 'styled-components'
import {
  compose,
  background,
  space,
  layout,
  color,
  border,
  typography,
  system,
} from 'styled-system'
import Container from './Container'
import Typography from './Typography'
import AntdInput from 'antd/lib/input'
import 'antd/lib/input/style/index.js'

const placeholderStyles = system({
  placeholderFontSize: {
    property: `fontSize`,
    scale: `fontSizes`,
  },
  placeholderFontStyle: {
    property: `fontStyle`,
  },
  placeholderColor: {
    property: `color`,
    scale: `colors`,
  },
})

const Input = styled(AntdInput)`
  &.ant-input {
    width: 100% !important;
    border-radius: 0;
    line-height: 1;
    ${compose(background, layout, space, color, border, typography)}
    &::placeholder {
      ${placeholderStyles}
    }
  }
`

const inputType = {
  text({ value, onChange, placeholder, name, disabled, inputType, ...props }) {
    return (
      <Input
        placeholderFontStyle="italic"
        onChange={({ target: { name, value } }) => onChange(value, name)}
        placeholder={placeholder || `Escribe aquí`}
        name={name}
        value={value}
        disabled={disabled}
        {...props}
        type={inputType}
      />
    )
  },
}

const InputWrapper = ({
  type = `text`,
  label = null,
  error = null,
  margin = null,
  color = null,
  width = null,
  flex = null,
  onChange = (_, __) => {},
  flexDirection = `column`,
  justifySelf = null,
  ...props
}) => {
  const Component = inputType[type]
  return (
    <>
      <Container
        justifySelf={justifySelf}
        flexDirection={flexDirection}
        margin={margin}
        width={width}
        flex={flex}
      >
        {label && (
          <Typography
            marginRight={flexDirection == `column` ? `0` : `2`}
            textStyle="colTable1"
            color={color}
          >
            {label}
          </Typography>
        )}
        <Component
          error={error}
          onChange={onChange}
          color={color}
          type={type}
          {...props}
        />
      </Container>
      {error != null ? (
        <Typography fontWeight="100" margin="0" color="error">
          {error}
        </Typography>
      ) : null}
    </>
  )
}
export default InputWrapper
