import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

function App() {

  return (
      <div className="App">
          <Routes>
            {/* Defining Routes for multiple screens */}
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>   
  );
}

export default App;
