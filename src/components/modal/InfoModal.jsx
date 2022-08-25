import React from 'react'
import { Modal } from '@material-ui/core';

const InfoModal = (props) => {
  const {open, handle} = props;
  return (
    <div>
      <Modal
        open ={open}
        onClose={handle}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <div className="modalInfo">
          <div data-cy="modal-information-icon" className="icon"></div>
          <div data-cy="modal-information-title" className="text">Activity berhasil dihapus</div>
        </div>
      </Modal>
    </div>
  )
}

export default InfoModal