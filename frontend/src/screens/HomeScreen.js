import React, { Fragment } from 'react';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <Fragment>
      <section className='landing landing-home'>
        <div className='row'>
          <div className='container-home'>
            <a href='/' className='btn btn-white'>
              Erkaklar uchun
            </a>
            <a href='/' className='btn btn-white'>
              Ayollar uchun
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <h2>Yangi mahsulotlar</h2>
        </div>

        <div className='row products-wrapper'>
          {products.map(product => {
            return <Product product={product} />;
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default HomeScreen;
