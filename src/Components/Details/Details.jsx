import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Data from '../Products/Data';
// style
import './Details.css';

const Details = (props) => {
  const { id } = useParams();
  // getting details with id
  let productDetails = Data.find((item) => item._id === parseInt(id));

  console.log(useParams());

  return (
    <div className="details">
      <div className="inside-container">
        <h3>product details</h3>
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
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
