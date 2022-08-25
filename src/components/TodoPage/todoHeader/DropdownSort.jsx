import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const DropdownSort = (props) => {
  const {sortHandle} = props
  const [isDropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState(1);
  let menuRef = useRef();

  let dataDropdown = [
    {
      id : 1,
      img : 'icon-sort-newest',
      name : 'Terbaru'
    },
    {
      id : 2,
      img : 'icon-sort-oldest',
      name : 'Terlama'
    },
    {
      id : 3,
      img : 'icon-sort-az',
      name : 'A-Z'
    },
    {
      id : 4,
      img : 'icon-sort-za',
      name : 'Z-A'
    },
    {
      id : 5,
      img : 'icon-sort-unfinished',
      name : 'Belum Selesai'
    },
  ]
  //make user can click outside of dropdown to close
  useEffect(() =>{
    let toggleHandler = (event) =>{
      if(!menuRef.current.contains(event.target)){
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', toggleHandler)
    return () =>{
      document.removeEventListener('mousedown', toggleHandler)
    }
  })

  const changeSort = (id) =>{
    setSelected(id);
    setDropdown(false);
    sortHandle(id)
  }
  return (
    <div className="dropdown">
      <button className="buttonSort" data-cy="todo-sort-button" onClick={() => setDropdown((isDropdown) => !isDropdown)}>
        <div className="icon-sort"></div>
      </button>
      <div ref={menuRef} className={`dropdown-menu ${isDropdown ? 'show' : ''}`} >
        <ul className="list-todo">
          {dataDropdown.map((item) => {
            return (
              <a data-cy="sort-selection" className="dropdown-item" onClick={() => changeSort(item.id)}>
                <div className={`item-label ${selected === item.id ? 'active' : ''}`} data-cy="false">
                  <div data-cy="sort-selection-icon" className={`iconSort ${item.img}`}></div>
                  <span data-cy="sort-selection-title">{item.name}</span>
                </div>
              </a>
          )})}
        </ul>
      </div>
    </div>
  )
}

export default DropdownSort