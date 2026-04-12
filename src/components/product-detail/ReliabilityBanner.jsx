import React from 'react';
import './ReliabilityBanner.css';
import trustIconSvg from '../../assets/images/Icon (6).svg';

const ReliabilityBanner = ({ addRevealRef }) => {
  return (
    <section className="reliability-section">
      <div className="reliability-container reveal reveal-up" ref={addRevealRef}>
        <div className="trust-icon">
          <img src={trustIconSvg} alt="Trust Icon" className="trust-svg" />
        </div>
        <h2 className="reliability-title">Certified Reliability</h2>
        <p className="reliability-text">
          Every product we build is subject to a 100% optical inspection. We maintain strict compliance with global engineering standards to ensure your mission-critical components are always operational.
        </p>
        <div className="cert-logos">
          <span>ISO 9001:2015</span>
          <span>AS9100D</span>
          <span>ROHS COMPLIANT</span>
          <span>REACH</span>
        </div>
      </div>
    </section>
  );
};

export default ReliabilityBanner;
