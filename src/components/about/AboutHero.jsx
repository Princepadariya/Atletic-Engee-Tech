import React from 'react';
import { motion } from 'framer-motion';
import aboutHeroBg from '../../assets/images/Group 13.png';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section
      className="about-hero-section"
      style={{ '--about-hero-bg': `url(${aboutHeroBg})` }}
    >
      <div className="about-hero-content">
        <motion.div 
          className="about-hero-badge"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          VANGUARD PRECISION SYSTEMS
        </motion.div>

        <motion.h1
          className="about-hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Our Legacy of <br />
          <span className="heading-muted">Precision.</span>
        </motion.h1>

        <motion.div 
          className="about-hero-desc-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="desc-border"></div>
          <p className="about-hero-desc">
            Engineering the future of defense through uncompromising structural 
            integrity and technological sovereignty. At Atletic Engee Tech, 
            we forge the components that define modern security.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
