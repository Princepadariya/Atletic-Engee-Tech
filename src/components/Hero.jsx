import React from 'react';
import { motion } from 'framer-motion';
import heroImagePng from '../assets/images/hero_image.png';
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero-new"
      id="home"
      style={{ '--hero-bg-image': `url(${heroImagePng})` }}
    >
      <div className="hero-content-wrap">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge-dot" />
          Precision Engineering
        </motion.div>

        {/* Primary heading */}
        <motion.h1
          className="hero-heading-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          Beyond <br /> Manufacturing:
        </motion.h1>

        {/* Secondary muted heading */}
        <motion.h2
          className="hero-heading-secondary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          Your Complete <br /> Defence Solutions Partner
        </motion.h2>

        {/* Body text */}
        <motion.p
          className="hero-body-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          From precision components to advanced defence assemblies, we
          transform complex engineering challenges into reliable, mission-ready
          solutions.
        </motion.p>

        {/* CTA button */}
        <motion.button
          className="btn-explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          Explore More
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
