import * as React from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import Input from './Input'
import Button from './Button'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        sx={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          item
          md={6.5}
          py={4}
          pl={7}
          pr={3}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            position: `relative`,
            backgroundColor: `common.white`,
            borderRadius: `10px`,
          }}
        >
          <Input label="Nombre unidad:" width="100%" marginBottom={3} />
          <Input label="Seleccione división:" width="100%" />
          <Button
            backgroundColor="transparent"
            color="gray.3"
            width="20%"
            textDecoration="underline"
            padding="1em 2em"
            border="5em"
            margin="0 1em"
            // onClick={onClose}
            fontSize="2"
          >
            Cancelar
          </Button>
          <Button width="20%" textDecoration="underline" padding="1em 2em" border="5em">
            Guardar cambios
          </Button>
        </Grid>
      </Modal>
    </div>
  )
}
