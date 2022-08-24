import React from 'react'
import Modal from '@material-ui/core/Modal'
import './TodoModal.css'

const ModalMUI = (props) => {
  let {open} = props;
  return (
    <div>
      <Modal
        open ={true}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <div className="modalContainer">
        <div class="modal-header">
          <h4 class="font-weight-bold" data-cy="modal-add-title">Tambah List Item</h4>
          <div class="icon-close" data-cy="modal-add-close-button"></div>
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalMUI