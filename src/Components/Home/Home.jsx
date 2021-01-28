import React from 'react';
// components
import Products from '../Products/Products';
import Support from '../Support/Support';
// image
import BackImg from '../../images/background.jpeg';

// style
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BackImg})` }}>
        <div className="banner">
          <h1>Welcome to our store</h1>
        </div>
      </div>
      <Support />
      <Products />
    </>
  );
};

export default Home;
