import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categories from '../categories';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Category from '../components/Category';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import './HomeScreen.css';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
          {categories.map((category) => {
            return <Category key={category._id} category={category} />;
          })}
        </div>
      </section>

      <section>
        <div className='row'>
          <h2>Yangi mahsulotlar</h2>
        </div>
        {loading ? (
          <div className='row'>
            <h2>Loading...</h2>
          </div>
        ) : error ? (
          <div className='row'>
            <h3>{error}</h3>
          </div>
        ) : (
          <div className='row card-wrapper'>
            {products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        )}

        <div className='row'>
          <div className='more'>
            <button className='btn-real btn-real-white'>Ko'proq yuklash</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeScreen;
