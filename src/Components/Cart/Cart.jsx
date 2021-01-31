import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// actions
import { deleteItem, increaseItem, decreaseItem, getTotals } from '../../actions/itemActions';
// style
import './Cart.css';

const Cart = (props) => {
  const { cart } = props.item;
  // method for getting subtotal
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  useEffect(() => {
    props.getTotals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cart">
      <div className="inside-container">
        {cart.length === 0 ? (
          <h3>Cart is currently empty</h3>
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
                      <h4>{cart.title}</h4>
                    </div>

                    <div className="counting">
                      <button
                        onClick={() => {
                          props.decreaseItem(cart._id);
                          props.getTotals();
                        }}
                      >
                        -
                      </button>
                      <span>{cart.quantity}</span>
                      <button
                        onClick={() => {
                          props.increaseItem(cart._id);
                          props.getTotals();
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div className="price">
                      <h4>${cart.price * cart.quantity}</h4>
                    </div>

                    <div className="delete-item">
                      <i
                        className="fas fa-trash"
                        onClick={() => {
                          props.deleteItem(cart._id);
                          props.getTotals();
                        }}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>

              {/*cart results*/}
              <div className="cart-results">
                <h3>Product Details</h3>

                <h4>
                  Shipping:
                  {total >= 100 ? <span className="free"> free </span> : `+${props.item.shipping}`}
                </h4>
                <h4>
                  Items: <span>{cart.reduce((acc, item) => acc + item.quantity, 0)} </span>
                </h4>
                <h4>
                  Subtotal:
                  <span> ${total >= 90 ? total : total + props.item.shipping}</span>
                </h4>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { deleteItem, increaseItem, decreaseItem, getTotals })(
  Cart,
);
