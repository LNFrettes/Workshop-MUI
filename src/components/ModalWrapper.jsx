

import NewScheduleUnit from './NewScheduleUnit'
import { Modal, Grid } from '@mui/material'

function ModalWrapper({ openModal, onClose, ...props }) {
  switch (openModal) {
    case `newScheduleUnit`:
      return (
        <Modal open 
        sx={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
        onClose={onClose} title="Agregar unidad agenda">
          <Grid  container 
          item
      md={6.5}
      py={4}
      pl={7}
      pr={3}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{        
        backgroundColor: `common.white`,
        borderRadius: `10px`,
      }}>
          <NewScheduleUnit onClose={onClose} />
          </Grid>
        </Modal>
      )
    default:
      return null
  }
}

export default ModalWrapper
