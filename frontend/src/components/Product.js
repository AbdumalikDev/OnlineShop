import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='card'>
      <div className='card-head'>
        <div className='card-badge'>
          {product.countInStock === 0 ? 'Mavjud Emas' : product.badge}
        </div>
        <Link to={`/product/${product._id}`} className='card-img'>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>

      <div className='card-body'>
        <Link
          to={`/product/${product.category}`}
          className='card-body-subtitle'
        >
          {product.category}
        </Link>
        <h4>
          <Link to={`/product/${product._id}`}> {product.name} </Link>
        </h4>
        <div className='card-body-details'>
          <div className='card-price'>
            <small> {product.reducedPrice} so'm</small> {product.price} so'm
          </div>
          <div className='card-links'>
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
