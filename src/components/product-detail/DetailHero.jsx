import React, { useState } from 'react';
import './DetailHero.css';

const DetailHero = ({ product, addRevealRef }) => {
  const [activeImg, setActiveImg] = useState(product.mainImage);

  return (
    <section className="detail-hero-section">
      <div className="detail-container">
        <div className="gallery-column reveal reveal-left" ref={addRevealRef}>
          <div className="main-image-box">
            <img src={activeImg} alt={product.title} />
          </div>
          <div className="thumbnail-row">
            {product.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`thumb-box ${activeImg === img ? 'active' : ''}`}
                onClick={() => setActiveImg(img)}
              >
                <img src={img} alt={`Thumbnail ${idx}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="info-column reveal reveal-right" ref={addRevealRef}>
          <span className="category-badge">{product.category}</span>
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-desc">{product.description}</p>

          <div className="info-footer">
            <div className="footer-line"></div>
            <span className="metadata">DEVELOPED FOR {product.sector}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailHero;
