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

// Adding item to cart
export const AddToCart = (id) => (dispatch) => {
  dispatch({
    type: ADD_ITEMS,
    payload: id,
  });
};

// Banner
export const bannerClose = () => (dispatch) => {
  dispatch({
    type: BANNER_CLOSE,
  });
};

// Deleting an item from cart
export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};

// Increasing item in the cart
export const increaseItem = (id, quantity) => (dispatch) => {
  console.log(`INCREASE : ${id}`);
  dispatch({
    type: INCREASE_ITEM,
    payload: id,
    quantity,
  });
};

// Decreasing item in the cart
export const decreaseItem = (id, quantity) => (dispatch) => {
  console.log(`DECREASE : ${id}`);
  dispatch({
    type: DECREASE_ITEM,
    payload: id,
    quantity,
  });
};

//  for getting the total price of items inside the cart
export const getTotals = () => (dispatch) => {
  dispatch({
    type: TOTAL_ITEMS,
  });
};

//  get details
export const getDetails = () => (dispatch) => {
  dispatch({
    type: DETAILS,
  });
};
