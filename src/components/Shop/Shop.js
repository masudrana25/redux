import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
  const products = [
    { name: 'Asus Laptop', id: 1 },
    {name : 'HP Laptop', id: 2},
    {name : 'Lenovo Laptop', id: 3},
    {name : 'Apple Laptop', id: 4},
    {name : 'Dell Laptop', id: 5},
    {name : 'Dim Laptop', id: 6},
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

export default Shop;