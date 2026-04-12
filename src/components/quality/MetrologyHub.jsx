import React from 'react';
import './MetrologyHub.css';
import vmmImg from '../../assets/images/Precision Measurement.png';

const MetrologyHub = ({ addRevealRef }) => {
  return (
    <section className="metrology-hub-section">
      <div className="container">
        <div className="vmm-grid">
          <div className="vmm-content reveal reveal-left" ref={addRevealRef}>
            <div className="vmm-watermark">VMM-<span>01</span></div>
            <h2 className="vmm-title">Vision Measuring Machine</h2>
            
            <div className="vmm-badges">
              <span className="vmm-badge">2.5D MEASUREMENT</span>
              <span className="vmm-badge">CNC AUTOMATED</span>
              <span className="vmm-badge">SUB-MICRON RESOLUTION</span>
            </div>

            <ul className="vmm-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Fully automated multi-axis inspection pathways
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Optical zoom capacity up to 100x for micro-feature analysis
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Instant data logging for comprehensive QC reporting
              </li>
            </ul>

            <a href="#datasheet" className="datasheet-link">
              TECHNICAL DATASHEET
            </a>
          </div>

          <div className="vmm-visual reveal reveal-right" ref={addRevealRef}>
            <div className="vmm-image-wrapper">
              <img src={vmmImg} alt="Vision Measuring Machine" className="vmm-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetrologyHub;

