import React from 'react';
import '../product/ProductGrid.css';
import './RelatedProducts.css';
import swapIcon from '../../assets/images/tdesign_swap-right.svg';

const RelatedProducts = ({ products, addRevealRef }) => {
  return (
    <section className="related-products-section">
      <div className="comp-header reveal reveal-up" ref={addRevealRef}>
        <div className="comp-title">
          <h2>Built for Consistent Performance</h2>
          <div className="comp-underline"></div>
        </div>
        <div className="comp-desc">
          <p>We ensure every component meets strict quality standards through precision manufacturing, delivering consistent performance, durability, and reliability across all selections.</p>
        </div>
      </div>

      <div className="product-grid">
        {products.map((item, idx) => (
          <div key={idx} className={`product-card reveal reveal-up delay-${(idx % 3) + 1}`} ref={addRevealRef}>
            <div className="product-card-header">
              <span className="product-ring"></span>
              <span className="product-title">{item.title}</span>
            </div>
            <div className="product-card-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-card-footer">
              <img src={swapIcon} alt="swap" className="swap-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
