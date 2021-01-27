import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='badge'>Yangi</div>
      <Link to={`/product/${product._id}`}>
        <span className='product-tumb'>
          <img src={product.image} alt='Samsung Galaxy S10' />
        </span>
      </Link>
      <div className='product-details'>
        <Link to={`/product/${product.category}`}>
          <span className='product-category'> {product.category} </span>
        </Link>
        <h4>
          <Link to={`/product/${product._id}`}> {product.name} </Link>
        </h4>
        <div className='product-bottom-details'>
          <div className='product-price'>
            <small> {product.reducedPrice} so'm</small> {product.price} so'm
          </div>
          <div className='product-links'>
            <button type='button'>
              <i className='fa fa-shopping-cart'></i>
            </button>
            <button type='button'>
              <i className='fa fa-heart'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
