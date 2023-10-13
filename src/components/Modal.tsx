import { useState, FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {
  compose,
  layout,
  LayoutProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  TypographyProps,
  system,
  position,
  PositionProps,
} from 'styled-system'
import { ModalProps } from 'antd/es/modal'
import { Modal as AntdModal } from 'antd'
import { Modal as MuiModal } from '@mui/material'
import Button from './Button'
import Icon from './Icon'


interface IModalProps
  extends Omit<ModalProps, `width` | `zIndex`>,
    LayoutProps,
    ColorProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    TypographyProps {
  closeColor?: ColorProps[`color`]
}

const HideModal = createGlobalStyle`
  .ant-modal-root{
    display:none;
  }
`
const closeColor = system({
  closeColor: {
    property: `color`,
    scale: `colors`,
  },
})

const fontSize = system({
  fontSize: {
    property: `fontSize`,
    scale: `fontSizes`,
  },
})

const Modal: FC<IModalProps> = styled(AntdModal)<IModalProps>`
  ${layout}
  ${position}
  & .ant-modal-header {
    padding: 1.5em 1em !important;
    ${compose(color, border, position)}
    padding: 30px 24px;
    & .ant-modal-title {
      color: white;
      ${fontSize}
    }
  }
  & .ant-modal-body {
    ${space}
    width: 100%;
    max-height: 100vh;
    overflow-y: auto;
  }
  & .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane,
  .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane {
    max-height: 45vh;
    overflow-y: scroll;
  }
  & .ant-modal-close-x {
    ${closeColor}
  }
`

Modal.defaultProps = {
  width: `80%`,
  borderRadius: `0px`,
  backgroundColor: `primary.2`,
  closeColor: `white`,
  fontSize: `4`,
}

interface Props extends IModalProps {
  onClose?: () => void
  isVisible: boolean
  title?: string
  isMinimizable?: boolean
}

const ModalWrapper: FC<Props> = ({
  onClose,
  isVisible,
  title,
  children,
  isMinimizable = false,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(true)
  return isVisible ? (
    <>
      <MuiModal
        open
        onCancel={onClose}
        title={title}
        footer={null}
        maskClosable={false}
        keyboard={false}
        {...props}
      >
        {children}
        {isMinimizable && (
          <Icon
            position="absolute"
            top="19px"
            right="60px"
            icon="minus"
            color="white"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </MuiModal>
      {!isExpanded && (
        <>
          <HideModal />
          <Button
            position="fixed"
            bottom="0"
            right="0"
            padding="2"
            onClick={() => setIsExpanded(true)}
          >
            Expandir <Icon icon="caretUp" />
          </Button>
        </>
      )}
    </>
  ) : null
}

export default ModalWrapper
