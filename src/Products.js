import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import productList from './Products.json';

function Products() {

  return (
    <div className="Products">
      <center>
        <div className="productGrid">
          {/* Rendering of the products from the JSON file */}
          {productList.map((item) => (
            <Link to={`/${item.id}`}>
              <div className="productCard">
                <div className="productDemo">
                  <img src={process.env.PUBLIC_URL + item.image} alt={item.name}></img>
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <p className="productTitle">{item.name}</p>
                <p className="productCost">INR {item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </center>
    </div>
  );
}

export default Products;