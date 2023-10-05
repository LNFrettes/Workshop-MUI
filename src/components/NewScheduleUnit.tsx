import { useState, useEffect } from 'react'
import { message } from 'antd'
import Button from './Button'
import Container from './Container'
import Input from './Input'


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
        <Button
          backgroundColor="transparent"
          color="gray.3"
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
        >
          Guardar cambios
        </Button>
      </Container>
    </>
  )
}

export default NewScheduleUnit
