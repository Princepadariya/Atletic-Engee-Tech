import React from 'react';
import './QualityHero.css';

const QualityHero = () => {
  return (
    <section className="quality-hero">
      <div className="container">
        <div className="quality-hero-layout">
          <div className="quality-hero-text">
            <span className="hero-top-label">METROLOGY STANDARDS</span>
            <h1 className="quality-hero-main-title">Precision Instrumentation Hub</h1>
            <p className="quality-hero-desc">
              Every component is machined at Precision. Metrology protocols are
              rigorous with a clean, high-precision environment of high-tolerance
              instruments. Robust, cost-engineering optics.
            </p>
          </div>
          <div className="quality-hero-stat">
            <div className="accuracy-label">±0.001mm</div>
            <div className="accuracy-sub">BASELINE ACCURACY THRESHOLD</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityHero;
