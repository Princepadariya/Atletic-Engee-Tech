import React from 'react';
import { Layers } from 'lucide-react';
import './AboutManufacture.css';
import componentsImg from '../../assets/images/Screenshot 2026-04-07 at 3.12.51 PM 1.png';
import brassImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 1.png';
import aluminiumImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 5.png';
import stainlessImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 4.png';
import copperImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 3.png';
import mildSteelImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 2.png';

const AboutManufacture = ({ addRevealRef }) => {
  const categories = [
    'Brass Bushings',
    'Cable Glands',
    'Precision Components',
    'LPG Fittings',
    'Electrical Parts',
    'Fasteners',
    'Valves & Screws'
  ];

  const materials = [
    { name: 'Brass', img: brassImg },
    { name: 'Aluminium', img: aluminiumImg },
    { name: 'Stainless Steel', img: stainlessImg },
    { name: 'Copper', img: copperImg },
    { name: 'Mild Steel', img: mildSteelImg }
  ];

  return (
    <section className="about-manufacture-section" id="what-we-manufacture">
      <div className="container">
        <div className="about-manufacture-header reveal reveal-up" ref={addRevealRef}>
          <div className="header-title-container">
            <div className="title-accent-line"></div>
            <h2 className="manufacture-title">What We Manufacture</h2>
          </div>
          <p className="manufacture-subtitle">
            We produce a wide range of precision components designed for high-performance industrial applications.
          </p>
        </div>

        <div className="manufacture-layout">
          {/* Left Column: Product Categories */}
          <div className="manufacture-col reveal reveal-left" ref={addRevealRef}>
            <div className="col-header">
              <div className="icon-circle">
                <Layers size={42} className="header-icon" />
              </div>
              <h3 className="col-title">Product Categories</h3>
            </div>
            <ul className="categories-list">
              {categories.map((cat, idx) => (
                <li key={idx} className="list-item">{cat}</li>
              ))}
            </ul>
          </div>

          {/* Center Image */}
          <div className="manufacture-center reveal reveal-up" ref={addRevealRef}>
            <div className="center-image-orbit">
              <div className="center-image-container">
                <img src={componentsImg} alt="Manufactured Components" />
              </div>
              <div className="orbit-dot dot-left"></div>
              <div className="orbit-dot dot-right"></div>
            </div>
            <div className="pagination-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Right Column: Materials */}
          <div className="manufacture-col reveal reveal-right" ref={addRevealRef}>
            <div className="col-header">
              <div className="icon-circle">
                <Layers size={20} className="header-icon" />
              </div>
              <h3 className="col-title">Materials</h3>
            </div>
            <ul className="materials-list">
              {materials.map((mat, idx) => (
                <li key={idx} className="list-item material-item">
                  <div className="material-swatch">
                    <img src={mat.img} alt={mat.name} className="swatch-img" />
                  </div>
                  <span className="material-name">{mat.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManufacture;
