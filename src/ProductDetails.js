import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBell, faArrowLeft, faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const productList = require('./Products.json');

function ProductDetails() {
  // useParams to extract the id parameter from the URL
  const { id } = useParams();
  const product = productList.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div  className="ProductDetails">
      <div className="productHeader">
        <Link to={`/`}><FontAwesomeIcon icon={faArrowLeft} style={{width: "25px", height: "25px"}}/></Link>
        <h2>Details</h2>
        <FontAwesomeIcon icon={faBell} style={{width: "25px", height: "25px"}}/>
      </div>
      {/* Rendering of product details from the JSON file */}
      <div className="productDemo">
        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} style={{width: "100%", height: "100%", borderRadius: "10px"}}></img>
        <button style={{width: "40px", height: "40px"}}><FontAwesomeIcon icon={faHeart} style={{width: "25px", height: "25px"}}/></button>
      </div>
      <p className="productName">{product.name}</p>
      <div className="rating">
        <FontAwesomeIcon icon={faStar} style={{width: "15px", height: "15px", color:"#FFA928", marginRight:"5px"}}/><p style={{marginRight:"5px"}}>{product.rating}/5</p>
        <p>({product.total} reviews)</p>
      </div>
      <p className="description">{product.description}</p>
      <h2 className="sizeHeader">Choose Size</h2>
      <div className="sizebuttons">
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </div>
      <div className="productFooter">
        <div className="cost">
          <p className="smallText">Price</p>
          <p className="largeText">INR {product.price}</p>
        </div>
        <button><FontAwesomeIcon icon={faCartShopping} style={{width: "20px", height: "20px", color: "#FFF", marginRight:"10px"}}/>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
