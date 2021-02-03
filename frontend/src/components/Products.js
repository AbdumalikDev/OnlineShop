import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProducts();
  });

  return (
    <>
      <div className='row card-wrapper'>
        {products.map(product => {
          return <Product key={product._id} product={product} />;
        })}
      </div>

      <div className='row'>
        <div className='more'>
          <button className='btn-real btn-real-white'>Ko'proq yuklash</button>
        </div>
      </div>
    </>
  );
};

export default Products;
