

import {  Grid, Modal, Typography } from '@mui/material'
import NewScheduleUnit from './NewScheduleUnit'

function ModalWrapper({ openModal, onClose, ...props }) {
  switch (openModal) {
    case `newScheduleUnit`:
      return (
        <Modal open onClose={onClose} >
          <NewScheduleUnit onClose={onClose} />
        </Modal>
      )
    default:
      return null
  }
}

export default ModalWrapper
