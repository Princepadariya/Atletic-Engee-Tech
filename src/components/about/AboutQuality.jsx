import React from 'react';
import './AboutQuality.css';
import certImg from '../../assets/images/Industrial quality control lab.png';

const AboutQuality = ({ addRevealRef }) => {
  return (
    <section className="about-quality-section" id="quality">
      <div className="container">
        {/* Top Header Section */}
        <div className="quality-top-grid">
          <div className="quality-text-content reveal reveal-left" ref={addRevealRef}>
            <div className="quality-bg-text">9001:2015</div>
            <h2 className="quality-title">
              <span className="title-primary">ISO 9001:2015 &</span> <br />
              <span className="title-secondary">AS9100D</span>
            </h2>
            <div className="quality-desc-container">
              <div className="desc-accent-line"></div>
              <p className="quality-description">
                Quality is not an inspection phase; it is an inherent property of our workflow. 
                Our facilities are audited to the highest aerospace and defense standards, 
                ensuring every unit shipped is mission-ready.
              </p>
            </div>
          </div>
          <div className="quality-cert-container reveal reveal-right" ref={addRevealRef}>
            <img src={certImg} alt="Quality Certification" className="cert-image" />
          </div>
        </div>

        {/* Bottom Metrics Cards */}
        <div className="quality-metrics-grid">
          {/* Card 01 */}
          <div className="quality-metric-card reveal reveal-up delay-1" ref={addRevealRef}>
            <div className="metric-header">
              <span className="metric-number">01/</span>
              <h3 className="metric-title">FULL TRACEABILITY</h3>
            </div>
            <p className="metric-desc">
              Material certification for every batch. We provide complete lineage documentation 
              from raw ore to finished component, ensuring total chain of custody for mission-critical hardware.
            </p>
            <div className="metric-footer">
              <span className="footer-label">COMPLIANCE METRIC</span>
              <span className="footer-value">100% VERIFIED</span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="quality-metric-card reveal reveal-up delay-2" ref={addRevealRef}>
            <div className="metric-header">
              <span className="metric-number">02/</span>
              <h3 className="metric-title">CMM INSPECTION</h3>
            </div>
            <p className="metric-desc">
              Sub-micron dimensional verification using automated Coordinate Measuring Machines. 
              Every geometric tolerance is validated against the master digital blueprint.
            </p>
            <div className="metric-footer">
              <span className="footer-label">PRECISION TOLERANCE</span>
              <span className="footer-value">+/- 0.0001MM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuality;
