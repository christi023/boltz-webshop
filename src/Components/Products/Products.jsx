import React, { useState, useEffect } from 'react';
//
import ProductCard from './ProductCard';
import Data from './Data';
// styles
import './Products.css';

const Products = () => {
  const [state, setState] = useState(Data);

  return (
    <div className="products">
      <div className="inside-container">
        <h3>Products</h3>
        <div className="products-center">
          {state.map((product) => (
            <ProductCard key={product._id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
