// Constants or Types
import {
  GET_ITEMS,
  ADD_ITEMS,
  BANNER_CLOSE,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOTAL_ITEMS,
  DETAILS,
} from "../constants/itemConstants";

import Data from "../Components/Products/Data";

const initialState = {
  items: Data,
  cart: [],
  total: 0,
  shipping: 10,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    // Adding and item
    case ADD_ITEMS:
      let existItem = state.cart.find((item) => item._id === action.payload);
      if (!existItem) {
        // bring items that only match the id
        let items = state.items.filter((item) => item._id === action.payload);
        let cartItems = [...state.cart, ...items];

        return {
          ...state,
          cart: cartItems,
        };
      } else {
        let items = state.items.filter((item) => item._id === action.payload);
        items.forEach((item) => {
          item.isInCart = true;
        });

        return {
          ...state,
        };
      }

    // this banner will show if the item is already in cart
    case BANNER_CLOSE:
      state.items.forEach((item) => {
        item.isInCart = false;
      });

      return {
        ...state,
      };

    // deleting an item
    case DELETE_ITEM:
      const filteredCart = state.cart.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        cart: filteredCart,
      };

    // increasing items inside the cart
    case INCREASE_ITEM:
      let incResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = { ...item, quantity: item.quantity + 1 };
        }
        //  console.log(item.quantity);
        return item;
      });

      return {
        ...state,
        cart: incResults,
      };

    // decreasing items inside the cart
    case DECREASE_ITEM:
      let decResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = {
            ...item,
            quantity:
              item.quantity === 1 ? (item.quantity = 1) : item.quantity - 1,
          };
        }
        //  console.log(item.quantity);
        return item;
      });

      return {
        ...state,
        cart: decResults,
      };

    // Details
    case DETAILS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default itemReducer;
