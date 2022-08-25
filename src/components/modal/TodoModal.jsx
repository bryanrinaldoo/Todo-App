import React from 'react'
import Modal from '@material-ui/core/Modal'
import './Modal.css'
import { TextField, MenuItem, FormControl, Select, ListItemIcon, ListItemText} from '@material-ui/core'
import { useState } from 'react'

const TodoModal = (props) => {
  const {open,handle} = props;
  const [values, setValues] = useState({
    title: '',
    priority: 'very-high',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const submitUpdate = () =>{
    // TODO: update API todo 
    console.log("ini title: ",values.title);
    console.log("ini priority: ",values.priority);
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
        <div className="modalContainer">
          <div class="modal-header">
            <h4 class="modal-title" data-cy="modal-add-title">Tambah List Item</h4>
            <div class="icon-close" data-cy="modal-add-close-button" onClick={handle}></div>
          </div>

          <div class="modal-body">
            <label data-cy="modal-add-name-title">NAMA LIST ITEM</label>
            <FormControl fullWidth data-cy="modal-add-name-input">
              <TextField variant="outlined" placeholder='Tambahkan nama list item' className="input-title" value={values.title} onChange={handleChange('title')} margin="normal"/>
            </FormControl>
            <label data-cy="modal-add-priority-title">PRIORITY</label><br/>
            <Select
              variant="outlined"
              className='input-priority'
              id="demo-simple-select"
              value={values.priority}
              onChange={handleChange('priority')}
              margin="normal"
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
              <MenuItem key={option.value} value={option.value}>
                <ListItemIcon><div className={`label-indicator ${option.value}`}></div></ListItemIcon>
                <ListItemText>{option.label}</ListItemText>
              </MenuItem>
              ))}
            </Select>
          </div>

          <div class="modal-footer">
            <button class={`btn ${ !values.title ? 'disabled' : ''}`} disabled={!values.title} id="AddFormSubmit" data-cy="modal-add-save-button" onClick={submitUpdate}>Simpan</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TodoModal