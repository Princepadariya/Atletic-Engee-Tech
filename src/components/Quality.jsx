import React from 'react';
import precisionIcon from '../assets/images/file-icons_precision.png';
import './Quality.css';

const Quality = ({ addRevealRef }) => {
  const qualityCards = [
    { title: "Precision Inspection at Every Stage", desc: "Every component is carefully inspected throughout the manufacturing process to ensure accuracy, consistency, and defect-free production." },
    { title: "High-Quality Raw Materials", desc: "We use premium-grade brass materials to ensure durability, strength, and long-lasting performance in every product." },
    { title: "Advanced Testing Equipment", desc: "Our facility is equipped with modern testing tools and instruments to verify precision, dimensions, and overall product quality." },
    { title: "Compliance with Global Standards", desc: "All components are manufactured in accordance with international quality standards to meet global industry requirements." },
    { title: "Consistent Batch Production", desc: "We maintain uniformity across all production batches, ensuring consistent quality and performance in every delivery." },
    { title: "Zero-Defect Quality Approach", desc: "Our strict quality control system is designed to minimize defects and deliver flawless components every time." }
  ];

  return (
    <section className="section quality-section" id="quality-trust">
      <div className="quality-header reveal reveal-up" ref={addRevealRef}>
        <div className="quality-header-title">
          <h2>Built for Consistent Performance</h2>
          <div className="quality-underline"></div>
        </div>
        <div className="quality-header-desc">
          <p>
            We ensure every component meets strict quality standards through precision manufacturing, delivering consistent performance, durability, and reliability across all applications.
          </p>
        </div>
      </div>

      <div className="quality-grid">
        {qualityCards.map((card, i) => (
          <div key={i} className={`quality-card reveal reveal-up delay-${(i % 3) + 1}`} ref={addRevealRef}>
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quality;
