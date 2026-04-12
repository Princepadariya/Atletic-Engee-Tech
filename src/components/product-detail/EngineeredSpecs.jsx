import React from 'react';
import './EngineeredSpecs.css';

const EngineeredSpecs = ({ data, addRevealRef }) => {
  return (
    <section className="engineered-specs-section">
      <div className="specs-container">
        <div className="dark-index-card reveal reveal-left" ref={addRevealRef}>
          <h3 className="index-title">Thread Standards Index</h3>
          <ul className="standards-list">
            {data.standards.map((std, idx) => (
              <li key={idx} className="standard-item">
                <span className="std-name">{std.name}</span>
                <span className="std-code">{std.code}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="integrity-content reveal reveal-right" ref={addRevealRef}>
          <h2 className="integrity-title">Engineering Integrity</h2>
          <p className="integrity-desc">{data.integrityText}</p>
          
          <div className="integrity-features">
            {data.features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeredSpecs;
