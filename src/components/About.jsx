import React from 'react';
import aboutImg1 from '../assets/images/ffbb99c0295e61db0012aa5bd09398178b27f818.jpg';
import aboutImg2 from '../assets/images/6f15857a5bb666551cc51a2a7434e9ea6ee82c6c.jpg';
import './About.css';

const About = ({ addRevealRef }) => {
  return (
    <section className="section about-section" id="about">
      <div className="perf-deliver-header reveal reveal-up" ref={addRevealRef}>
        <div className="perf-deliver-title">
          <h2 className="title-navy">Performance We Deliver</h2>
          <div className="title-underline"></div>
        </div>
        <div className="perf-deliver-desc">
          <p>
            We deliver precision-engineered brass components using advanced manufacturing processes, 
            ensuring consistent quality, reliability, and performance across global industries and 
            demanding applications.
          </p>
        </div>
      </div>

      <div className="about-grid new-about" ref={addRevealRef}>
        <div className="about-images reveal reveal-left" ref={addRevealRef}>
          <img src={aboutImg1} alt="Brass Components" className="about-img-top" />
          <img src={aboutImg2} alt="Manufacturing Plant" className="about-img-bottom" />
        </div>

        <div className="about-text-content reveal reveal-right" ref={addRevealRef}>
          <p className="about-desc">
            Specializing in precision-engineered brass components, we support industries where accuracy, durability, and performance are non-negotiable. Our expertise spans defense-grade components, EV parts, and industrial fasteners, manufactured using advanced CNC technology and high-quality raw materials.
          </p>

          <div className="progress-bars">
            <div className="progress-item">
              <div className="progress-label">
                <span>Defense Component Manufacturing</span>
              </div>
              <div className="progress-bar-wrapper">
                <div className="progress-track" style={{ '--fill': '95%' }}>
                  <div className="progress-fill"></div>
                </div>
                <span className="progress-val">95%</span>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">
                <span>EV Precision Parts Development</span>
              </div>
              <div className="progress-bar-wrapper">
                <div className="progress-track" style={{ '--fill': '90%' }}>
                  <div className="progress-fill"></div>
                </div>
                <span className="progress-val">90%</span>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">
                <span>Custom Brass Fasteners & Components</span>
              </div>
              <div className="progress-bar-wrapper">
                <div className="progress-track" style={{ '--fill': '85%' }}>
                  <div className="progress-fill"></div>
                </div>
                <span className="progress-val">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flat Stats Bar */}
      <div className="flat-stats-bar reveal reveal-up delay-1" ref={addRevealRef}>
        <div className="flat-stat-item">
          <h3>2007</h3>
          <p>Since Manufacturing unit</p>
        </div>
        <div className="flat-stat-item">
          <h3>300+</h3>
          <p>components delivered</p>
        </div>
        <div className="flat-stat-item">
          <h3>51k+</h3>
          <p>Manufacturer Unit</p>
        </div>
        <div className="flat-stat-item">
          <h3>10+</h3>
          <p>Metals Processed</p>
        </div>
      </div>
    </section>
  );
};

export default About;
