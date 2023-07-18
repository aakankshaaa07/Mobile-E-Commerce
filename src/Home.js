import './App.css';
import React from 'react';
import Header from './Header';
import Products from './Products';
import HomeFooter from './HomeFooter';

function Home() {

  return (
    <div className="App">
      <Header/>
      <Products/>
      <div className="homefooter"><HomeFooter/></div>
    </div>
  );
}

export default Home;