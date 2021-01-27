import React from 'react';
import { Link } from 'react-router-dom';
import './ProductScreen.css';

const ProductScreen = () => {
  return (
    <section>
      <div className='row'>
        <div className='product-wrapper'>
          <div className='product-photo'>
            <div className='product-links'>
              <button type='button'>
                <i className='fa fa-share'></i>
              </button>
              <button type='button'>
                <i className='fa fa-heart'></i>
              </button>
            </div>
            <div className='product-tumb'>
              <img src='/img/product1.png' alt='Samsung S10 phone' />
            </div>
            <div className='photo-album'>
              <ul>
                <li>
                  <img src='/img/product1.png' alt='Samsung S10 phone' />
                </li>
                <li>
                  <img src='/img/product1.png' alt='Samsung S10 phone' />
                </li>
                <li>
                  <img src='/img/product1.png' alt='Samsung S10 phone' />
                </li>
                <li>
                  <img src='/img/product1.png' alt='Samsung S10 phone' />
                </li>
              </ul>
            </div>
          </div>
          <div className='product-info'>
            <h1>Samsung galaxy S10</h1>
            <div className='price'>
              1,200,000 so'm <small>1,700,000 so'm</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              necessitatibus adipisci architecto natus nulla quaerat corrupti
              aspernatur quas maxime, voluptatem placeat reprehenderit beatae.
            </p>
            <div className='product-counter'>
              <span>
                <i className='fa fa-minus'></i>
              </span>
              <input type='text' value='1' min='1' readonly />
              <span>
                <i className='fa fa-plus'></i>
              </span>
            </div>
            <Link to='/payment' className='btn btn-white'>
              Sotib olish
            </Link>
            <button className='btn-real btn-real-white'>
              Savatga qo'shish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
