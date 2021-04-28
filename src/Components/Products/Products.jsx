import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// actions
import { AddToCart, bannerClose } from '../../actions/itemActions';
// Components
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

// styles
import './Products.css';

const Products = (props) => {
  // add to cart
  const AddToCart = (id) => {
    props.AddToCart(id);
    // banner will show if item is already in cart
    setTimeout(() => {
      props.bannerClose();
    }, 2000);
  };

  const { items } = props.item;

  return (
    <div className="products">
      <div className="inside-container">
        <h3>Products</h3>
        <div className="products-center">
          {items ? (
            items.map((product) => (
              <ProductCard
                key={product._id}
                data={product}
                AddToCart={() => AddToCart(product._id)}
                isInCart={product.isInCart}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, {  AddToCart, bannerClose })(Products);
