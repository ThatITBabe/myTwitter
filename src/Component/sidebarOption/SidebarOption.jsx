import React from 'react'
import "./sidebarOption.css"


const SidebarOption = ({active, text, Icon}) => {
    
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <p>{Icon}</p>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption