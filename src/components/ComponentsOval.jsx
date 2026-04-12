import React from 'react';
import swapIcon from '../assets/images/tdesign_swap-right.svg';
import turnedImg from '../assets/images/ISO 90012015 Certified Facility 3.png';
import forgedImg from '../assets/images/ISO 90012015 Certified Facility 2.png';
import millingImg from '../assets/images/ChatGPT Image Mar 28, 2026, 01_17_03 AM 1.png';
import broachImg from '../assets/images/ChatGPT Image Mar 28, 2026, 01_22_13 AM] 1.png';
import stampingImg from '../assets/images/ChatGPT Image Mar 28, 2026, 01_26_33 AM 1.png';
import './ComponentsOval.css';

const productData = [
  { id: 1, title: 'Brass Turned Components', img: turnedImg },
  { id: 2, title: 'Brass Forged component', img: forgedImg },
  { id: 3, title: 'Brass Milling component', img: millingImg },
  { id: 4, title: 'Brass Broach component', img: broachImg },
  { id: 5, title: 'Brass Stamping component', img: stampingImg },
];

const ComponentsOval = ({ addRevealRef }) => {
  return (
    <section className="section components-oval-section" id="oval-components">
      <div className="components-oval-content">
        <div className="comp-header reveal reveal-up" ref={addRevealRef}>
          <div className="comp-title">
            <h2>Precision Manufacturing,<br />Built for Performance</h2>
            <div className="comp-underline"></div>
          </div>
          <div className="comp-desc">
            <p>
              We use advanced CNC machining and automated processes to ensure high precision.
              Strict quality control guarantees consistent and reliable brass components.
              Built to meet global standards for defense, EV, and industrial applications.
            </p>
          </div>
        </div>

        <div className="oval-grid">
          {productData.map((product, i) => (
            <div
              key={product.id}
              className={`oval-card reveal reveal-up delay-${(i % 3) + 1}`}
              ref={addRevealRef}
            >
              <div className="oval-card-header">
                <span className="oval-ring"></span>
                <span className="oval-title">{product.title}</span>
              </div>
              <div className="oval-card-img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="oval-card-footer">
                <img src={swapIcon} alt="swap" className="oval-swap-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsOval;

