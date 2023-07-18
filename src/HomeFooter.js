import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faCartShopping, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function HomeFooter() {

  return (
    <div className="HomeFooter">
      <div className="footerElement">
        <center><FontAwesomeIcon icon={faHome} style={{width: "20px", height: "20px"}}/></center>
        <p>Home</p>
      </div>
      <div className="footerElement" style={{color:"#8D7B7B"}}>
        <center><FontAwesomeIcon icon={faHeart} style={{width: "20px", height: "20px", color: "#00000099"}}/></center>
        <p>Saved</p>
      </div>
      <Link to={`/cart`}><div className="footerElement" style={{color:"#8D7B7B"}}>
        <center><FontAwesomeIcon icon={faCartShopping} style={{width: "20px", height: "20px", color: "#00000099"}}/></center>
        <p>Cart</p>
      </div></Link>
      <div className="footerElement" style={{color:"#8D7B7B"}}>
        <center><FontAwesomeIcon icon={faGear} style={{width: "20px", height: "20px", color: "#00000099"}}/></center>
        <p>Settings</p>
      </div>
    </div>
  );
}

export default HomeFooter;

