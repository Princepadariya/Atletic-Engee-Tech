import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Menu } from 'lucide-react';
import './App.css';
import heroImg from './assets/images/hero.png';
import heroImagePng from './assets/images/hero_image.png';
import aboutImg1 from './assets/images/ffbb99c0295e61db0012aa5bd09398178b27f818.jpg';
import perfImage from './assets/images/Rectangle 45.png';
import aboutImg2 from './assets/images/6f15857a5bb666551cc51a2a7434e9ea6ee82c6c.jpg';
import industryImage from './assets/images/Group 3.png';
import logoImg from './assets/images/Logo.svg';

const App = () => {

  /* --- Scroll reveal logic --- */
  const revealRefs = useRef([]);
  const [activePerfTab, setActivePerfTab] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logoImg} alt="Atletic Engee Tech Logo" />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#manufacturing">Quality</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="mobile-toggle" aria-label="Menu">
          <Menu size={24} />
        </button>
      </nav>

      {/* ========== NEW HERO ========== */}
      <section className="hero-new" id="home">
        <div className="hero-top-content">
          <div className="hero-title">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Beyond Manufacturing: Your Complete Defence Solutions Partner
            </motion.h1>
          </div>
          <div className="hero-desc">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From precision components to advanced defence assemblies we transform complex engineering challenges into reliable, mission-ready solutions. Every product is built with accuracy, durability, and national security in mind.
            </motion.p>
            <motion.button
              className="btn-explore"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore More
            </motion.button>
          </div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={heroImagePng} alt="Atletic Engee Tech Manufacturing Facility" className="hero-main-img" />

          <div className="hero-stats-overlay">
            <div className="hero-stat-card">
              <h3>2007</h3>
              <p>Since Manufacturing unit</p>
            </div>
            <div className="hero-stat-card">
              <h3>300+</h3>
              <p>components delivered</p>
            </div>
            <div className="hero-stat-card">
              <h3>51k+</h3>
              <p>Manufacturer Unit</p>
            </div>
            <div className="hero-stat-card">
              <h3>10+</h3>
              <p>Metals Processed</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="section" id="about" style={{ paddingTop: '8rem' }}>
        <div className="section-header reveal" ref={addRevealRef}>
          <span className="sub-heading">About Us</span>
          <h2>Precision Brass Manufacturing for Critical Industries</h2>
        </div>

        <div className="about-grid new-about" ref={addRevealRef}>
          <div className="about-images reveal" ref={addRevealRef}>
            <img src={aboutImg1} alt="Brass Components" className="about-img-top" />
            <img src={aboutImg2} alt="Manufacturing Plant" className="about-img-bottom" />
          </div>

          <div className="about-text-content reveal" ref={addRevealRef}>
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
        <div className="flat-stats-bar reveal" ref={addRevealRef}>
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

      {/* ========== INDUSTRY WE SERVE SECTION ========== */}
      <section className="section" id="products" style={{ background: 'var(--bg-white)' }}>
        <div className="section-header reveal" ref={addRevealRef} style={{ marginBottom: '4rem' }}>
          <span className="sub-heading">Industry We Serve</span>
          <h2>Precision solutions for critical global industries</h2>
        </div>
        <div className="industry-grid reveal" ref={addRevealRef}>
          <img src={industryImage} alt="Industry Card 1" style={{ width: '100%' }} />
          <img src={industryImage} alt="Industry Card 2" style={{ width: '100%' }} />
          <img src={industryImage} alt="Industry Card 3" style={{ width: '100%' }} />
          <img src={industryImage} alt="Industry Card 4" style={{ width: '100%' }} />
          <img src={industryImage} alt="Industry Card 5" style={{ width: '100%' }} />
          <img src={industryImage} alt="Industry Card 6" style={{ width: '100%' }} />
        </div>
      </section>

      {/* ========== PERFORMANCE SECTION ========== */}
      <section className="section reveal" id="manufacturing" ref={addRevealRef}>
        <div className="perf-header">
          <div className="perf-title">
            <h2>Precision Manufacturing,<br />Built for Performance</h2>
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
              <div className="perf-card-header" style={{ marginBottom: '1.25rem' }}>
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

      {/* ========== EXCELLENCE SECTION ========== */}
      <section className="section" id="excellence">
        <div className="section-header reveal" ref={addRevealRef} style={{ marginBottom: '4rem' }}>
          <span className="sub-heading">Manufacturing Excellence</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Precision-driven manufacturing solutions</h2>
        </div>
        
        <div className="excellence-grid reveal" ref={addRevealRef}>
          <div className="excellence-left">
            <p className="excellence-desc">
              Our manufacturing capabilities are built on precision engineering, advanced CNC technology, and strict quality control delivering high-performance brass components for critical industries worldwide.
            </p>
            <div className="excellence-partner">
              — Trusted Manufacturing Partner
            </div>
          </div>
          <div className="excellence-right">
            <div className="excellence-card">
              <div className="excellence-card-header">
                <span className="perf-ring"></span>
                <h4>High Precision</h4>
              </div>
              <p>±0.01 mm tolerance in machining</p>
            </div>
            <div className="excellence-card">
              <div className="excellence-card-header">
                <span className="perf-ring"></span>
                <h4>Scalable Production</h4>
              </div>
              <p>From prototypes to mass manufacturing</p>
            </div>
            <div className="excellence-card">
              <div className="excellence-card-header">
                <span className="perf-ring"></span>
                <h4>Global Standards</h4>
              </div>
              <p>ISO-compliant quality processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP / GLOBAL REACH ========== */}
      <section className="section map-section" style={{ background: 'var(--bg-light)' }}>
        <div className="section-header reveal" ref={addRevealRef}>
          <h2>Delivering Precision, Consistency, and Reliability to Every Component</h2>
          <p>Our products are trusted by clients across the globe. We export to over 50 countries worldwide.</p>
        </div>
        <div className="map-img reveal" ref={addRevealRef}>
          {/* Placeholder for world map */}
          <div style={{ width: '100%', height: 300, background: '#E8E9EF', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#676C86', fontSize: '1.1rem' }}>World Map — Add your map image here</span>
          </div>
        </div>
        <div className="flags-row reveal" ref={addRevealRef}>
          {['India', 'USA', 'Germany', 'Italy', 'Mexico', 'Spain'].map((country, i) => (
            <div className="flag-item" key={i}>
              <div style={{ width: 48, height: 32, background: '#CCC', borderRadius: 4 }}></div>
              <span>{country}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section reveal" ref={addRevealRef}>
        <h2>Looking for a Reliable Manufacturing Partner?</h2>
        <p>Get in touch with us today to discuss your requirements and receive a custom quote.</p>
        <a href="#contact" className="btn-primary">
          Contact Us <ArrowRight size={16} />
        </a>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4 style={{ fontFamily: 'var(--heading-font)', color: 'var(--heading-color)', fontSize: '1.25rem' }}>
              Atletic Engee Tech
            </h4>
            <p>
              Your trusted partner for precision brass manufacturing.
              Quality, innovation, and reliability in every component.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#manufacturing">Manufacturing</a>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <a href="#products">Brass Fittings</a>
            <a href="#products">Brass Connectors</a>
            <a href="#products">Brass Valves</a>
            <a href="#products">Brass Inserts</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:info@atleticengeetech.com">
              <Mail size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              info@atleticengeetech.com
            </a>
            <a href="tel:+910000000000">
              <Phone size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              +91 00000 00000
            </a>
            <a href="#contact">
              <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Jamnagar, Gujarat, India
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Atletic Engee Tech. All rights reserved.</span>
          <span>Designed with precision.</span>
        </div>
      </footer>
    </>
  );
};

export default App;
