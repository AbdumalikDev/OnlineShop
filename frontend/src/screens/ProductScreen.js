import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';
import Rating from '../components/Rating';
import ProductFeature from '../components/ProductFeature';
import TabButton from '../components/TabButton';
import { listProductDetails } from '../actions/productActions';
import './ProductScreen.css';
import Spinner from '../components/Spinner';

const ProductScreen = ({ history, match }) => {
  const [tab, setTab] = useState('Xususiyatlari');
  let [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const changeTabHandler = (text) => {
    setTab(text);
  };

  const decreaseQty = () => {
    qty > 1 && setQty(qty--);
  };

  const increaseQty = () => {
    setQty(qty++);
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <Fragment>
      <section>
        <div className='row'>
          {loading ? (
            <Spinner />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <div className='product-wrapper'>
              <div className='product-photo'>
                <div className='card-links'>
                  <button type='button'>
                    <i className='fa fa-share'></i>
                  </button>
                  <button type='button'>
                    <i className='fa fa-heart'></i>
                  </button>
                </div>
                <div className='card-img'>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className='photo-album'>
                  <img src={product.image} alt={product.name} />
                  <img src={product.image} alt={product.name} />
                  <img src={product.image} alt={product.name} />
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className='product-info'>
                <h1> {product.name} </h1>
                <div className='price'>
                  {product.price} so'm
                  <small>
                    {product.reducedPrice && product.reducedPrice + ` so'm`}
                  </small>
                </div>
                <p>{product.description}</p>
                <div className='product-counter'>
                  <span onClick={decreaseQty}>
                    <i className='fa fa-minus'></i>
                  </span>
                  <input
                    type='text'
                    value={product.countInStock === 0 ? '0' : qty}
                    min='1'
                    max={product.countInStock}
                  />
                  <span onClick={increaseQty}>
                    <i className='fa fa-plus'></i>
                  </span>
                </div>
                <p>
                  {product.countInStock === 0 &&
                    `Mahsulot mavjud emas! Lekin siz uni savatga qo'sha olasiz qachonki mavjud bo'lsa email orqali xabar beramis.`}
                </p>
                {product.countInStock !== 0 && (
                  <Link to='/payment' className='btn btn-white'>
                    Sotib olish
                  </Link>
                )}
                <button
                  onClick={addToCartHandler}
                  className='btn-real btn-real-white'
                  type='button'
                >
                  Savatga qo'shish
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className='rating'>
          <h3>Reyting</h3>
          <span> {product.rating} </span>
          <Rating rating={product.rating} />
          <div> {product.numReviews} ta izoh bildirilgan </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <div className='container-review'>
            <div className='tab'>
              <TabButton
                tabStyle={tab === 'Xususiyatlari' && '3px'}
                text='Xususiyatlari'
                clickTab={changeTabHandler}
              />
              <TabButton
                tabStyle={tab !== 'Xususiyatlari' && '3px'}
                text={['Izohlar ', <sup> {product.numReviews} </sup>]}
                clickTab={changeTabHandler}
              />
            </div>

            <div
              className='tab-content'
              style={{ display: tab !== 'Xususiyatlari' && 'none' }}
            >
              <h4>Samsung S10 telefoninig umumiy xususiyatlari</h4>
              <div className='product-features'>
                {product.features &&
                  product.features.map((feature) => {
                    return (
                      <ProductFeature key={feature._id} feature={feature} />
                    );
                  })}
              </div>
            </div>

            <div
              className='tab-content'
              style={{ display: tab === 'Xususiyatlari' && 'none' }}
            >
              {product.comments &&
                product.comments.map((comment) => {
                  return <Comment key={comment._id} comment={comment} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductScreen;
