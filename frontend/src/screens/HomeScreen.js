import React, { Fragment } from 'react';
import categories from '../categories';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Category from '../components/Category';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <Fragment>
      <section className='landing landing-home'>
        <div className='row'>
          <div className='container-home'>
            <Link to='/' className='btn btn-white'>
              Erkaklar uchun
            </Link>
            <Link to='/' className='btn btn-white'>
              Ayollar uchun
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <h2>Ommabop toifalar</h2>
        </div>

        <div className='row card-wrapper'>
          {categories.map(category => {
            return <Category key={category._id} category={category} />;
          })}
        </div>
      </section>

      <section>
        <div className='row'>
          <h2>Yangi mahsulotlar</h2>
        </div>

        <Products />
      </section>
    </Fragment>
  );
};

export default HomeScreen;
