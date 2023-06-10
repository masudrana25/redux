import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [{ name: 'Asus Laptop', id: 1 },
    {name : 'HP Laptop', id: 2},
    {name : 'Lenovo Laptop', id: 3},
    {name : 'Apple Laptop', id: 4},
    {name : 'Dell Laptop', id: 5},
    {name : 'Dim Laptop', id: 6}]
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newId = action.id;
      const newCart = [...state.cart, newId];
      return { cart: newCart };
    case REMOVE_FROM_CART:
      const removeId = action.id;
      const remainingCart = state.cart.filter(item => item.id !== removeId);
      return { cart: remainingCart };
    default:
      return state;
  };
};

export default cartReducers;