
import { Grid, Button as ButtonMUI } from '@mui/material'
import Input from './Input'


const NewScheduleUnit = ({ onClose }) => {

  return (
    <>
      <Grid alignItems="center" width="100%" marginY={3}>
        <Input
          label="Nombre unidad:"
          width="100%"
          marginBottom={3}
        />
        <Input
          label="Seleccione división:"
          width="100%"
        />
      </Grid>
      <Grid 
        container
        alignItems="right"
        justifyContent="flex-end"
        marginTop={5}
        marginBottom={3}
      >
        <ButtonMUI
          backgroundColor="transparent"
          width="2"
          padding={2}
          variant="outlined"
          onClick={onClose}
        >
          Cancelar
        </ButtonMUI>
        <ButtonMUI
          width={2}
          marginRight={2}
          variant="contained"
          padding={2}
          border={2}
        >
          Guardar cambios
        </ButtonMUI>
      </Grid>
    </>
  )
}

export default NewScheduleUnit
