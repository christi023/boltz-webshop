import React, { useState } from 'react';
import Data from '../Products/Data';
// Component
import Message from '../Message/Message';
// style
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState(Data);

  return (
    <div className="cart">
      <div className="inside-container">
        {cart.length === 0 ? (
          <Message>Cart is currently empty</Message>
        ) : (
          <>
            <h3>Cart products</h3>
            <div className="cart-center">
              <div className="cart-info">
                {cart.map((cart) => (
                  <div className="single-cart" key={cart._id}>
                    <div className="cart-img">
                      <img src={cart.img} alt="img" />
                    </div>

                    <div className="cart-title sameItem">
                      <h4 className="">{cart.title}</h4>
                    </div>

                    <div className="counting">
                      <button>-</button>
                      <span>{cart.count}0</span>
                      <button>+</button>
                    </div>

                    <div className="price">
                      <h4>${cart.price}</h4>
                    </div>

                    <div className="delete-item">
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                ))}
              </div>

              {/*cart results*/}
              <div className="cart-results">
                <h3>product details</h3>
                <h4>
                  shipping: <span className="free">free</span>
                </h4>
                <h4>
                  price: $ <span>100</span>
                </h4>
                <h4>
                  Total price: <span>$2345</span>
                </h4>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
