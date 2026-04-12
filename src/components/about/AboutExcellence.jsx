import React from 'react';
import { Target, Layers, Factory } from 'lucide-react';
import './AboutExcellence.css';

const AboutExcellence = ({ addRevealRef }) => {
  return (
    <section className="about-excellence-section" id="about-excellence">
      <div className="container about-excellence-grid">
        <div className="excellence-left reveal reveal-left" ref={addRevealRef}>
          <h2 className="excellence-main-title">Manufacturing<br />Excellence</h2>
          <div className="precision-line"></div>
          <p className="excellence-main-desc">
            Our manufacturing capabilities are built on precision engineering, advanced CNC technology, and strict
            quality control. Every component produced under the Aero Precision banner undergoes rigorous validation
            to ensure mission success in critical environments.
          </p>
        </div>

        <div className="excellence-right">
          <div className="excellence-cards-grid">
            {/* High Precision Card */}
            <div className="excellence-card-item card-light reveal reveal-up delay-1" ref={addRevealRef}>
              <div className="icon-box-dark">
                <Target size={24} />
              </div>
              <h3 className="card-title">HIGH PRECISION</h3>
              <p className="card-desc">Unrivaled accuracy for complex aerospace components.</p>
              <div className="tolerance-pills-bar">
                <span className="pill-label">TOLERANCE</span>
                <span className="pill-value">+/- 0.01 mm</span>
              </div>
            </div>

            {/* Scalable Production Card */}
            <div className="excellence-card-item card-dark reveal reveal-up delay-2" ref={addRevealRef}>
              <div className="icon-box-outline">
                <Layers size={24} />
              </div>
              <h3 className="card-title">SCALABLE PRODUCTION</h3>
              <p className="card-desc">From prototypes to mass manufacturing, we adapt to your mission scale.</p>
            </div>

            {/* Bottom Card (Wide) */}
            <div className="excellence-card-wide reveal reveal-up delay-3" ref={addRevealRef}>
              <div className="wide-icon-circle">
                <Factory size={28} />
              </div>
              <div className="wide-content">
                <h3 className="card-title">GLOBAL STANDARDS</h3>
                <p className="card-desc">
                  ISO-compliant quality processes ensuring absolute reliability across every tactical unit.
                </p>
              </div>
              <div className="standards-pills">
                <span>ISO</span>
                <span>AS</span>
                <span className="highlight-pill">9100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExcellence;

