import React from 'react';

const ProductFeature = ({ feature }) => {
  return (
    <div>
      <p> {feature.feature} </p>
      <p> {feature.value} </p>
    </div>
  );
};

export default ProductFeature;
