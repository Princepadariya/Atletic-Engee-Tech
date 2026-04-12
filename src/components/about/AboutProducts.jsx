import React from 'react';
import { ArrowUpRight, Hammer, Cog, Wrench } from 'lucide-react';
import turnedImg from '../../assets/images/Turned Components.png';
import './AboutProducts.css';

const AboutProducts = ({ addRevealRef }) => {
  return (
    <section className="about-products-section" id="about-products">
      <div className="container about-products-inner">
        <div className="about-products-header reveal reveal-up" ref={addRevealRef}>
          <h2 className="about-products-title">ENGINEERED BRASS PRODUCTS</h2>
          <p className="about-products-subtitle">
            Our technical catalog encompasses over 300 unique components, each forged for high-stress industrial environments.
          </p>
        </div>

        <div className="products-grid-layout">
          {/* Main Featured Card */}
          <div className="product-card-featured reveal reveal-left" ref={addRevealRef}>
            <div className="featured-card-image">
              <img src={turnedImg} alt="Turned Components" />
              <div className="featured-card-overlay"></div>
            </div>
            <div className="featured-card-content">
              <h3>Turned Components</h3>
              <p>Precision lathing for aerospace-grade circular connectors and structural fasteners.</p>
            </div>
            <div className="featured-card-footer">
              <div className="arrow-icon-box">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="products-right-stack">
            <div className="products-top-row">
              <div className="product-card-small reveal reveal-right delay-2" ref={addRevealRef}>
                <h3 className="small-card-title">FORGED PARTS</h3>
                <div className="small-card-icon">
                  <Hammer size={18} strokeWidth={1.5} />
                </div>
              </div>
              <div className="product-card-small reveal reveal-right delay-3" ref={addRevealRef}>
                <h3 className="small-card-title">MILLING</h3>
                <div className="small-card-icon">
                  <Cog size={18} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            
            <div className="product-card-wide reveal reveal-up delay-4" ref={addRevealRef}>
              <h3 className="small-card-title">BROACH COMPONENTS</h3>
              <div className="small-card-icon">
                <Wrench size={18} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProducts;
