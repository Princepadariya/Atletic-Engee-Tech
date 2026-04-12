import React, { useState } from 'react';
import perfImage from '../assets/images/Rectangle 45.png';
import './Performance.css';

const Performance = ({ addRevealRef }) => {
  const [activePerfTab, setActivePerfTab] = useState(0);

  return (
    <section className="section perf-section reveal reveal-up" id="manufacturing" ref={addRevealRef}>
      <div className="perf-header">
        <div className="perf-title">
          <h2>Precision Manufacturing,<br />Built for Performance</h2>
          <div className="perf-underline"></div>
        </div>
        <div className="perf-desc">
          <p>
            We use advanced CNC machining and automated processes to ensure high precision. Strict quality control guarantees consistent and reliable brass components. Built to meet global standards for defense, EV, and industrial applications.
          </p>
        </div>
      </div>

      <div className="perf-tabs">
        {['CNC Machining', 'Quality Control', 'Production Efficiency', 'Compliance'].map((tab, i) => (
          <div
            key={i}
            className={`perf-tab ${activePerfTab === i ? 'active' : ''}`}
            onClick={() => setActivePerfTab(i)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="perf-content">
        <div className="perf-details">
          <h3>Details</h3>

          <div className="perf-card">
            <div className="perf-card-header perf-card-header-custom">
              <span className="perf-ring"></span>
              <h4>High Accuracy Machining</h4>
            </div>
            <ul className="perf-list">
              <li>Production Type: CNC Precision Manufacturing</li>
              <li>Tolerance Level: ±0.01 mm</li>
              <li>Material Grade: High-Quality Brass</li>
              <li>Inspection Status: Approved</li>
            </ul>
          </div>

          <div className="perf-card">
            <div className="perf-card-header">
              <span className="perf-ring"></span>
              <h4>Manufactured with precision, not compromise.</h4>
            </div>
          </div>
        </div>

        <div className="perf-image">
          <img src={perfImage} alt="CNC Machining Facility" />
        </div>
      </div>
    </section>
  );
};

export default Performance;
