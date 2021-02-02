import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems, AddToCart } from '../../actions/itemActions';
// style
import './Details.css';

const Details = (props) => {
  useEffect(() => {
    props.getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { id } = useParams();
  // getting details with id
  let productDetails = props.item.items.find((item) => item._id === parseInt(id));

  return (
    <div className="details">
      <div className="inside-container">
        <h3>Product Details</h3>
        <div className="details-center">
          <div className="details-img">
            <img src={`${productDetails.img}`} alt="product" />
          </div>

          <div className="details-info">
            <h4 className="details-title">{productDetails.title}</h4>
            <p className="details-text-info">{productDetails.details}</p>
            <p className="details-price">
              price: <span>${productDetails.price}</span>
            </p>

            <div className="details-btn">
              <Link to="/products">
                <button>Back to products</button>
              </Link>
              <button onClick={() => props.AddToCart(productDetails._id)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, AddToCart })(Details);
