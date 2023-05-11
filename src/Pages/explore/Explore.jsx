import React from 'react'
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import "./explore.css"


const Explore = () => {
  return (
    <div className='explore'>
        <div className="header_explore">
          {/* <div className="search_section"> */}
          <div className="widgets__input">
            <BsSearch className="widgets__searchIcon"/>
            <input type="text" placeholder='Search Twitter'/>
          </div>
          <div className="settings_section">
            <FiSettings/>
          </div>
          <h2>Trends for you</h2>
          <div className="trend_contents">

          </div>
          <div className="moreOptions">
            
          </div>
        </div>
    </div>
  )
}

export default Explore