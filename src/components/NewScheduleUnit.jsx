import { useState, useEffect } from 'react'
import { message } from 'antd'
import Button from './Button'
import Container from './Container'
import Input from './Input'

import {  Grid ,Button as ButtonMUI } from '@mui/material'


const NewScheduleUnit = ({ onClose }) => {

  return (
    <>
      <Container alignItems="center" width="100%" marginY={3}>
        <Input
          label="Nombre unidad:"
          width="100%"
          marginBottom={3}
        />
        <Input
          label="Seleccione división:"
          width="100%"
        />
      </Container>
      <Container
        alignItems="center"
        justifyContent="flex-end"
        marginTop={5}
        marginBottom={3}
      >
        <ButtonMUI
          variant="contained"
          onClick={onClose}
          
        >
          Cancelar
        </ButtonMUI>
        <ButtonMUI
          sx={{ marginLeft: "15px" }}
          variant="contained"
        >
          Guardar cambios
        </ButtonMUI>
      </Container>
    </>
  )
}

export default NewScheduleUnit
