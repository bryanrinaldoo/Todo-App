import React from 'react'
import { Modal } from '@material-ui/core';

const InfoModal = (props) => {
  const {open, handle, label} = props;
  return (
    <div>
      <Modal
        open ={open}
        onClose={handle}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <div className="modalInfo" data-cy="modal-information">
          <div data-cy="modal-information-icon" className="icon"></div>
          <div data-cy="modal-information-title" className="text">{label} berhasil dihapus</div>
        </div>
      </Modal>
    </div>
  )
}

export default InfoModal