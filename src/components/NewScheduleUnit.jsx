import { Button, Container, Stack, TextField } from "@mui/material"


const NewScheduleUnit = ({ onClose }) => {

  return (
    <Stack gap={2} p={5}>
      <Stack alignItems="center" width="100%" marginY={3} gap={5}>
        <TextField
          label="Nombre unidad:"
          marginBottom={3}
          fullWidth
        />
        <TextField
          label="Seleccione división:"
          fullWidth
        />
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="flex-end"
        marginTop={5}
        marginBottom={3}
        direction="row"
        gap={2}
      >
        <Button
          backgroundColor="transparent"
          width="20%"
          textDecoration="underline"
          padding="1em 2em"
          border="5em"
          margin="0 1em"
          onClick={onClose}
          fontSize="2"
        >
          Cancelar
        </Button>
        <Button
          width="20%"
          textDecoration="underline"
          padding="1em 2em"
          border="5em"
          variant="contained"
          color="secondary"
        >
          Guardar cambios
        </Button>
      </Stack>
    </Stack>
  )
}

export default NewScheduleUnit
