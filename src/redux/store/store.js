// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import cartReducers from './../reducers/cartReducers';
export default function() {
  const store = createStore(cartReducers);
  return store;
}

