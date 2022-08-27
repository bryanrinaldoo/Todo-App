import React, { useEffect } from 'react'
import Modal from '@material-ui/core/Modal'
import './Modal.css'
import { TextField, MenuItem, FormControl, Select, ListItemIcon, ListItemText} from '@material-ui/core'
import { useState } from 'react'

const TodoModal = (props) => {
  const {open,handle, handleCreate, updateData} = props;
  const [values, setValues] = useState({
    title: '',
    priority: 'very-high',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const displayData = () =>{
    setValues({
      title: updateData.title,
      priority: updateData.priority
    })
  }
  useEffect(() => {
    if(updateData){
      displayData()
    }
  },[updateData])

  const createNew = (title, priority) =>{
    handleCreate(title,priority);
    setValues({
      title: '',
      priority: 'very-high'
    })
  }
  
  const currencies = [
    {
      value: 'very-high',
      label: 'Very High',
    },
    {
      value: 'high',
      label: 'High',
    },
    {
      value: 'normal',
      label: 'Normal',
    },
    {
      value: 'low',
      label: 'Low',
    },
    {
      value: 'very-low',
      label: 'Very Low',
    },
    
  ];
  return (
    <div>
      <Modal
        open ={open}
        onClose={handle}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <div className="modalContainer" data-cy="modal-add">
          <div className="modal-header">
            <h4 className="modal-title" data-cy="modal-add-title">Tambah List Item</h4>
            <div className="icon-close" data-cy="modal-add-close-button" onClick={handle}></div>
          </div>

          <div className="modal-body">
            <label data-cy="modal-add-name-title" onClick={displayData}>NAMA LIST ITEM</label>
            <FormControl fullWidth data-cy="modal-add-name-input">
              <TextField variant="outlined" placeholder='Tambahkan nama list item' className="input-title" value={values.title} onChange={handleChange('title')} />
            </FormControl>
            <label data-cy="modal-add-priority-title">PRIORITY</label><br/>
            <Select
              data-cy="modal-add-priority-dropdown"
              variant="outlined"
              className='input-priority'
              id="demo-simple-select"
              value={values.priority}
              onChange={handleChange('priority')}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                getContentAnchorEl: null
              }}
            >
              {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value} data-cy="modal-add-priority-item">
                <ListItemIcon><div className={`label-indicator ${option.value}`}></div></ListItemIcon>
                <ListItemText>{option.label}</ListItemText>
              </MenuItem>
              ))}
            </Select>
          </div>

          <div className="modal-footer">
            <button className={`btn ${ !values.title ? 'disabled' : ''}`} disabled={!values.title} id="AddFormSubmit" data-cy="modal-add-save-button" onClick={event => {
              !values.title ? handle() :
              updateData ? handleCreate(updateData.id, values.title, values.priority) : createNew(values.title, values.priority)}}>Simpan</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TodoModal