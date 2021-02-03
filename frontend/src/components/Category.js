import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Category = ({ category }) => {
  return (
    <div className='card'>
      <div className='card-head'>
        <Link to='/' className='card-img'>
          <img src={category.image} alt={category.name} />
        </Link>
      </div>
      <div className='card-category'>
        <h4>
          <Link to='/'> {category.name} </Link>
        </h4>
      </div>
    </div>
  );
};

export default Category;
