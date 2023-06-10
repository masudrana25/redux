import React from 'react';
import Product from '../Product/Product';
import { addToCart } from './../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
  console.log(props);
  const products = [
    
  ]
  return (
    <div>
      <h1>this is shop</h1>
      {
        products.map( pd => <Product product = {pd}></Product>)
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  };
};

const mapDispatchToProps = {
  addToCart: addToCart
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

connectToStore(Shop)

export default Shop;