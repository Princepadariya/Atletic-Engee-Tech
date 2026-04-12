import React from 'react';
import mapSvg from '../assets/images/map-base 1.svg';
import './GlobalCTA.css';

const GlobalCTA = ({ addRevealRef }) => {
  return (
    <section className="section global-cta-section" id="contact-map">
      <div className="global-cta-header comp-header reveal reveal-up" ref={addRevealRef}>
        <div className="comp-title">
          <h2>Serving Global Markets</h2>
          <div className="comp-underline"></div>
        </div>
        <div className="comp-desc">
          <p>Serving clients worldwide with precision-engineered brass components, ensuring consistent quality, reliable delivery, and compliance with international standards across industries.</p>
        </div>
      </div>

      <div className="global-map-container">
        <img src={mapSvg} alt="Global Operations Map" className="world-map-img" />
      </div>

      <div className="global-cta-footer">
        <div className="global-cta-text">
          <p>Partner with us for high-quality manufacturing, consistent performance, and on-time delivery across global markets.</p>
          <a href="#contact" className="btn-explore" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Contact Now
          </a>
        </div>
        <div className="global-flags">
          <img src="https://flagcdn.com/w320/us.png" alt="USA" />
          <img src="https://flagcdn.com/w320/de.png" alt="Germany" />
          <img src="https://flagcdn.com/w320/pe.png" alt="Peru" />
          <img src="https://flagcdn.com/w320/br.png" alt="Brazil" />
          <img src="https://flagcdn.com/w320/il.png" alt="Israel" />
          <img src="https://flagcdn.com/w320/es.png" alt="Spain" />
          <img src="https://flagcdn.com/w320/it.png" alt="Italy" />
          <div className="flag-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
