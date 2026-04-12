import React from 'react';
import './IndustryServe.css';

// Import SVG icons
import tankIcon from '../assets/images/game-icons_tank.svg';
import evIcon from '../assets/images/bi_ev-front.svg';
import electricalIcon from '../assets/images/game-icons_electrical-resistance.svg';
import fastenersIcon from '../assets/images/fasteners 1.svg';
import automotiveIcon from '../assets/images/carbon_ibm-elo-automotive-compliance.svg';
import gasIcon from '../assets/images/fluent_gas-propane-16-regular.svg';

const industries = [
  {
    id: '01',
    title: 'DEFENCE COMPONENTS',
    subtitle: 'TACTICAL GRADE HARDWARE',
    description: 'High-precision brass components engineered for mission-critical defense applications, ensuring strength, reliability, and consistent performance under extreme conditions.',
    icon: tankIcon
  },
  {
    id: '02',
    title: 'EV PARTS',
    subtitle: 'POWER DISTRIBUTION UNITS',
    description: 'Precision brass components designed for electric vehicles, ensuring high conductivity, efficiency, and reliable performance in advanced mobility systems.',
    icon: evIcon
  },
  {
    id: '03',
    title: 'ELECTRICAL',
    subtitle: 'CONDUCTIVITY EXPERTS',
    description: 'High-performance brass electrical parts engineered for superior conductivity, safety, and consistent performance across diverse electrical applications.',
    icon: electricalIcon
  },
  {
    id: '04',
    title: 'FASTENERS',
    subtitle: 'INDUSTRIAL LOCKING SYSTEMS',
    description: 'Durable brass fasteners engineered for secure fastening, corrosion resistance, and long-lasting performance across industrial and mechanical applications.',
    icon: fastenersIcon
  },
  {
    id: '05',
    title: 'AUTOMOTIVE',
    subtitle: 'PRECISION TRANSMISSION',
    description: 'Precision-engineered brass components designed for automotive systems, ensuring durability, efficiency, and consistent performance across demanding vehicle applications.',
    icon: automotiveIcon
  },
  {
    id: '06',
    title: 'GAS',
    subtitle: 'FLUID CONTROL SOLUTIONS',
    description: 'High-quality brass components designed for gas applications, ensuring leak-proof performance, durability, and compliance with strict safety standards.',
    icon: gasIcon
  }
];

const IndustryServe = ({ addRevealRef }) => {
  return (
    <section className="section industry-section" id="industries">
      <div className="industry-content-container">
        <div className="industry-header-flex reveal reveal-up" ref={addRevealRef}>
          <div className="header-left">
            <h2>Industries We Power</h2>
            <div className="header-underline"></div>
          </div>
          <div className="header-right">
            <p>
              Delivering precision-engineered brass components across defense, EV, electrical, 
              and industrial sectors, ensuring performance, reliability, and compliance with 
              global standards for demanding applications.
            </p>
          </div>
        </div>

        <div className="industry-cards-grid">
          {industries.map((industry, i) => (
            <div 
              key={industry.id} 
              className={`industry-card reveal reveal-up delay-${(i % 3) + 1}`}
              ref={addRevealRef}
            >
              <div className="card-top">
                <span className="card-number">{industry.id}</span>
                <div className="card-icon">
                  <img src={industry.icon} alt={industry.title} />
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{industry.title}</h3>
                <span className="card-subtitle">{industry.subtitle}</span>
                <p className="card-description">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServe;


