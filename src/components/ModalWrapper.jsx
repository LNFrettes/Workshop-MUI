

import { AppBar, Button, Dialog, IconButton, Stack, Typography } from '@mui/material'
import Modal from './Modal'
import NewScheduleUnit from './NewScheduleUnit'

function ModalWrapper({ openModal, onClose, ...props }) {

       return <Dialog open={openModal == 'newScheduleUnit'} isVisible onClose={onClose} maxWidth='lg' 
       
       >
          <AppBar position="static" color="secondary" sx={{
            width: '1000px',
          }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
            <Typography variant="h6">New Schedule Unit</Typography>
            <IconButton onClick={onClose} color="inherit">
              X
            </IconButton>
            </Stack>
          </AppBar>
          <NewScheduleUnit onClose={onClose} />
        </Dialog>
  
}

export default ModalWrapper
