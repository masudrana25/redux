import React from 'react';

const Product = (props) => {
  const {name, id } = props.product;
  return (
    <div style={{border: '1px solid red', margin: '50px', borderRadius: '20px', padding: '20px'}}>
      <h2>{id}</h2>
      <h1>this is {name}</h1>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;