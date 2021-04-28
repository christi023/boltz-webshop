export const selectCart = (state) => state.item.cart;

export const selectTotalValueOfCart = (state) =>
  state.item.cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
