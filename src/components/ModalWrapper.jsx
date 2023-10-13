

import NewScheduleUnit from './NewScheduleUnit'
import { Modal, Container } from '@mui/material'

function ModalWrapper({ openModal, onClose, ...props }) {
  switch (openModal) {
    case `newScheduleUnit`:
      return (
        <Modal open onClose={onClose} title="Agregar unidad agenda">
          <Container
            item
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              position: `relative`,
              backgroundColor: `common.white`,
              borderRadius: `10px`,
            }} 
          >
            <NewScheduleUnit onClose={onClose} />
          </Container>
        </Modal>
      )
    default:
      return null
  }
}

export default ModalWrapper
