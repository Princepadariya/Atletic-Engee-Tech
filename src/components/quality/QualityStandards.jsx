import React from 'react';
import './QualityStandards.css';
import certImg from '../../assets/images/Industrial quality control lab.png';

const QualityStandards = ({ addRevealRef }) => {
  return (
    <section className="quality-standards-section">
      <div className="container">
        {/* ISO Header Area */}
        <div className="standards-header reveal reveal-up" ref={addRevealRef}>
          <div className="standards-bg-text">9001:2015</div>
          <div className="standards-grid">
            <div className="standards-text">
              <h2 className="standards-main-title">
                <span className="text-dark">ISO 9001:2015 &</span> <br />
                <span className="text-grey">AS9100D Compliance</span>
              </h2>
              <div className="standards-line-desc">
                <div className="vertical-accent"></div>
                <p className="standards-p">
                  At Atletic Engee Tech, quality is not an inspection phase; it is an inherent property of our workflow. 
                  Our facilities are audited to the highest aerospace and defense standards, ensuring every unit 
                  shipped is mission-ready and compliant with global safety protocols.
                </p>
              </div>
            </div>
            <div className="standards-cert-box reveal reveal-right" ref={addRevealRef}>
              <img src={certImg} alt="Quality Certification" className="standards-cert-img" />
              <div className="cert-caption">Official Certification Proof</div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Cards */}
        <div className="standards-cards-grid">
          <div className="standard-card reveal reveal-left" ref={addRevealRef}>
            <div className="header-meta">
              <span className="index">01/</span>
              <h3 className="card-heading">FULL TRACEABILITY</h3>
            </div>
            <p className="card-body-text">
              Material certification for every batch. We provide complete lineage documentation 
              from raw ore to finished component, ensuring total chain of custody for mission-critical hardware.
            </p>
            <div className="card-status-footer">
              <div className="status-item">
                <span className="label">COMPLIANCE METRIC</span>
                <span className="value">100% VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="standard-card reveal reveal-right" ref={addRevealRef}>
            <div className="header-meta">
              <span className="index">02/</span>
              <h3 className="card-heading">CMM INSPECTION</h3>
            </div>
            <p className="card-body-text">
              Sub-micron dimensional verification using automated Coordinate Measuring Machines. 
              Every geometric tolerance is validated against the master digital blueprint with extreme precision.
            </p>
            <div className="card-status-footer">
              <div className="status-item">
                <span className="label">PRECISION TOLERANCE</span>
                <span className="value text-brass">+/- 0.0001MM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;
