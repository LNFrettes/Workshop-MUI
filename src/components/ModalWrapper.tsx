

import Modal from './Modal'
import NewScheduleUnit from './NewScheduleUnit'

function ModalWrapper({ openModal, onClose, ...props }) {
  switch (openModal) {
    case `newScheduleUnit`:
      return (
        <Modal isVisible onClose={onClose} title="Agregar unidad agenda">
          <NewScheduleUnit onClose={onClose} />
        </Modal>
      )
    default:
      return null
  }
}

export default ModalWrapper
