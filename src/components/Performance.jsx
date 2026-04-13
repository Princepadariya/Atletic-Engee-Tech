import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import perfImage from '../assets/images/Rectangle 45.png';
import './Performance.css';

const Performance = () => {
  const [activePerfTab, setActivePerfTab] = useState(0);

  const tabs = ['CNC Machining', 'Quality Control', 'Production Efficiency', 'Compliance'];

  return (
    <section className="section perf-section" id="manufacturing">
      <motion.div 
        className="perf-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="perf-title">
          <h2>Precision Manufacturing,<br />Built for Performance</h2>
          <div className="perf-underline"></div>
        </div>
        <div className="perf-desc">
          <p>
            We use advanced CNC machining and automated processes to ensure high precision. Strict quality control guarantees consistent and reliable brass components. Built to meet global standards for defense, EV, and industrial applications.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="perf-tabs"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`perf-tab ${activePerfTab === i ? 'active' : ''}`}
            onClick={() => setActivePerfTab(i)}
          >
            {tab}
            {activePerfTab === i && (
              <motion.div 
                layoutId="perf-tab-active"
                className="perf-tab-underline"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent)'
                }}
              />
            )}
          </div>
        ))}
      </motion.div>

      <div className="perf-content">
        <motion.div 
          className="perf-details"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
        </motion.div>

        <motion.div 
          className="perf-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={perfImage} alt="CNC Machining Facility" />
        </motion.div>
      </div>
    </section>
  );
};

export default Performance;
