import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, Target, ArrowUp } from 'lucide-react';
import './App.css';
import heroImg from './assets/images/hero.png';
import heroImagePng from './assets/images/hero_image.png';
import aboutImg1 from './assets/images/ffbb99c0295e61db0012aa5bd09398178b27f818.jpg';
import perfImage from './assets/images/Rectangle 45.png';
import aboutImg2 from './assets/images/6f15857a5bb666551cc51a2a7434e9ea6ee82c6c.jpg';
import industryImage from './assets/images/Group 3.png';
import logoImg from './assets/images/Logo.svg';
import turnedImg from './assets/images/Brass Turned component.png';
import forgedImg from './assets/images/Brass Forged component.png';
import millingImg from './assets/images/Brass Milling component.png';
import broachImg from './assets/images/Brass Broach component.png';
import stampingImg from './assets/images/Brass Stamping component.png';
import precisionIcon from './assets/images/file-icons_precision.png';
import mapSvg from './assets/images/Map.svg';
import footerLogo from './assets/images/Atletic logo bg remove 2.svg';

const App = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <section className="section about-section" id="about">
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
      <section className="section products-section" id="products">
        <div className="section-header reveal products-header" ref={addRevealRef}>
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


      {/* ========== EXCELLENCE SECTION ========== */}
      <section className="section" id="excellence">
        <div className="section-header reveal section-header-spacing" ref={addRevealRef}>
          <span className="sub-heading">Manufacturing Excellence</span>
          <h2>Precision-driven manufacturing solutions</h2>
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

      {/* ========== COMPONENTS OVAL SECTION ========== */}
      <section className="section" id="oval-components">
        <div className="section-header reveal section-header-spacing" ref={addRevealRef}>
          <span className="sub-heading">Featured Products</span>
          <h2>Our Brass Components</h2>
        </div>
        <div className="components-oval-container reveal" ref={addRevealRef}>
          <div className="component-oval-item">
            <div className="component-oval-img">
              <img src={turnedImg} alt="Brass Turned component" />
            </div>
            <h3>Brass Turned Component</h3>
          </div>
          <div className="component-oval-item">
            <div className="component-oval-img">
              <img src={forgedImg} alt="Brass Forged component" />
            </div>
            <h3>Brass Forged Component</h3>
          </div>
          <div className="component-oval-item">
            <div className="component-oval-img">
              <img src={millingImg} alt="Brass Milling component" />
            </div>
            <h3>Brass Milling Component</h3>
          </div>
          <div className="component-oval-item">
            <div className="component-oval-img">
              <img src={broachImg} alt="Brass Broach component" />
            </div>
            <h3>Brass Broach Component</h3>
          </div>
          <div className="component-oval-item">
            <div className="component-oval-img">
              <img src={stampingImg} alt="Brass Stamping component" />
            </div>
            <h3>Brass Stamping Component</h3>
          </div>
        </div>
      </section>

      {/* ========== QUALITY SECTION ========== */}
      <section className="section quality-section" id="quality-trust">
        <div className="section-header reveal quality-header" ref={addRevealRef}>
          <span className="sub-heading quality-subheading">Quality You Can Trust</span>
          <h2 className="quality-heading">
            Delivering precision, consistency, and reliability in every component
          </h2>
        </div>

        <div className="quality-grid reveal" ref={addRevealRef}>

          <div className="quality-card">
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>Precision Inspection at Every Stage</h4>
            <p>Every component is carefully inspected throughout the manufacturing process to ensure accuracy, consistency, and defect-free production.</p>
          </div>

          <div className="quality-card">
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>High-Quality Raw Materials</h4>
            <p>We use premium-grade brass materials to ensure durability, strength, and long-lasting performance in every product.</p>
          </div>

          <div className="quality-card">
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>Advanced Testing Equipment</h4>
            <p>Our facility is equipped with modern testing tools and instruments to verify precision, dimensions, and overall product quality.</p>
          </div>

          <div className="quality-card">
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>Compliance with Global Standards</h4>
            <p>All components are manufactured in accordance with international quality standards to meet global industry requirements.</p>
          </div>

          <div className="quality-card">
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>Consistent Batch Production</h4>
            <p>We maintain uniformity across all production batches, ensuring consistent quality and performance in every delivery.</p>
          </div>

          <div className="quality-card">
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>Zero-Defect Quality Approach</h4>
            <p>Our strict quality control system is designed to minimize defects and deliver flawless components every time.</p>
          </div>

        </div>
      </section>

      {/* ========== GLOBAL MAP & CTA SECTION ========== */}
      <section className="section global-cta-section reveal" ref={addRevealRef} id="contact-map">
        <div className="global-cta-header">
          <h2>Looking for a Reliable Manufacturing Partner?</h2>
          <p>Get precision-engineered brass components tailored to your exact requirements.</p>
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
            <img src="https://flagcdn.com/w40/us.png" alt="USA" />
            <img src="https://flagcdn.com/w40/de.png" alt="Germany" />
            <img src="https://flagcdn.com/w40/pe.png" alt="Peru" />
            <img src="https://flagcdn.com/w40/br.png" alt="Brazil" />
            <img src="https://flagcdn.com/w40/il.png" alt="Israel" />
            <img src="https://flagcdn.com/w40/es.png" alt="Spain" />
            <img src="https://flagcdn.com/w40/it.png" alt="Italy" />
            <div className="flag-placeholder"></div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* ROW 1: Navigation & Info */}
            <div className="footer-nav-group footer-group-1-nav">
              <div className="footer-col">
                <h4>PAGES</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#categories">Categories</a></li>
                  <li><a href="#products">Product</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>INDUSTRY</h4>
                <ul>
                  <li><a href="#defence">Defence</a></li>
                  <li><a href="#ev-parts">EV Parts</a></li>
                  <li><a href="#fastener">Fastener</a></li>
                  <li><a href="#automotive">Automotive</a></li>
                  <li><a href="#electrical">Electrical</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-nav-group footer-group-2-nav">
              <div className="footer-col" style={{marginLeft: '2rem'}}>
                <h4>ATLETIC</h4>
                <ul>
                  <li><a href="#certificates">Certificates</a></li>
                  <li><a href="#quality">Quality</a></li>
                  <li><a href="#export">Export</a></li>
                  <li><a href="#process">Process</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>PRODUCTS</h4>
                <ul>
                  <li><a href="#brass-turned">Brass Turned Component</a></li>
                  <li><a href="#brass-forged">Brass Forged Component</a></li>
                  <li><a href="#brass-milling">Brass Milling Component</a></li>
                  <li><a href="#brass-broach">Brass Broach Component</a></li>
                  <li><a href="#brass-stamping">Brass Stamping Component</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-info-group">
              <img src={footerLogo} alt="Atletic Logo" className="footer-logo" />
              <div className="logo-divider"></div>
              <p className="footer-contact">+91 98245 83526</p>
              <p className="footer-email">info@atleticengeetech</p>
            </div>

            {/* ROW 2: Social */}
            <div className="footer-social-group footer-group-1-social">
              <div className="footer-divider"></div>
              <div className="footer-social">
                <span className="social-name">Facebook</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </div>

            <div className="footer-social-group footer-group-2-social">
              <div className="footer-divider"></div>
              <div className="footer-social" style={{marginLeft: '2rem'}}>
                <span className="social-name">Whatsapp</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
            </div>

            {/* ROW 3: Bottom Elements */}
            <div className="footer-copyright-wrap">
              <p className="copyright">© 2026 — All Copyrights reserved for Atletic Engee Tech</p>
            </div>

            <div className="footer-back-to-top-wrap">
              <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                <ArrowUp size={20} />
              </button>
            </div>

          </div>
        </div>
      </footer>

    </>
  );
};

export default App;
