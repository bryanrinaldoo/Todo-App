import React from 'react'
import { Modal } from '@material-ui/core';

const AlertModal = (props) => {
  const {open, handle, type, title, alertHandle} = props;
  return (
    <div>
      <Modal
        open ={open}
        onClose={handle}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <div className="modalContainer-activity">
          <div className="modalContent">
            <div className="alertImg">
              <div data-cy="modal-delete-icon" className="img"></div>
            </div>
            <div data-cy="modal-delete-title" className="alertText">Apakah anda yakin menghapus {type} “{title}”?</div>
          </div>

          <div className="modalButton">
            <div data-cy="modal-delete-cancel-button" className="btn btnCancel" onClick={handle}>Batal</div>
            <div data-cy="modal-delete-confirm-button" className="btn btnDelete" onClick={alertHandle}>Hapus</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default AlertModal