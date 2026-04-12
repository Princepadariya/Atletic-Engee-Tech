import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import ProductGrid from '../components/product/ProductGrid';

const Product = () => {
  const addRevealRef = useScrollReveal();

  return (
    <div className="product-page">
      <ProductGrid addRevealRef={addRevealRef} />
    </div>
  );
};

export default Product;
