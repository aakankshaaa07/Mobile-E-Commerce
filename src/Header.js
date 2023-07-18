import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="Header">
      <div className="heading">
        <h2>Discover</h2>
        <FontAwesomeIcon icon={faBell} style={{width: "25px", height: "25px"}} />
      </div>
      <div className="search">
        <div className="searchbar">
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search anything"
            />
        </div>
        <div className="filterbutton">
          <button><FontAwesomeIcon icon={faFilter} style={{width: "20px", height: "20px"}}/></button>
        </div>
      </div>
      <div className="filters">
        <button style={{backgroundColor: "#000", color: "#FFF"}}>All</button>
        <button>Men</button>
        <button>Women</button>
        <button>Kids</button>
      </div>
    </div>
  );
}

export default Header;