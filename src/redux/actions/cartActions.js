export const ADD_TO_CART = 'ADD_TO_CART';
export const ROMOVE_FROM_CART = 'ROMOVE_FROM_CART';

export const addToCart = id => {
  return { type: ADD_TO_CART, id };
};

export const removeFromCart = id => {
  return { type: ROMOVE_FROM_CART , id };
}