
import { Button, Grid, TextField, Typography } from '@mui/material'


const NewScheduleUnit = ({ onClose }) => {

  return (
    <Grid container
    sx={{ position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
  
  >
  
          <Typography>
            Nueva unidad de horario 
          </Typography>
 
      <Grid alignItems="center" width="100%" marginY={3}>

        <TextField
          label="Nombre unidad:"
          width="100%"
          marginBottom={3}
        />
        <TextField
          label="Seleccione división:"
          width="100%"
        />
      </Grid>
      <Grid
        alignItems="center"
        justifyContent="flex-end"
        marginTop={5}
        marginBottom={3}
      >
        <Button
          variant='text'
          onClick={onClose}
          >
          Cancelar
        </Button>
        <Button

        variant="contained"
        >
          Guardar cambios
        </Button>
      </Grid>
    </Grid>
  )
}

export default NewScheduleUnit
