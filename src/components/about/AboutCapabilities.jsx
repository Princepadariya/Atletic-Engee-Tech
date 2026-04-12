import React from 'react';
import { Users, BarChart3, Timer, ClipboardCheck, Settings, FileCheck } from 'lucide-react';
import './AboutCapabilities.css';

const capabilities = [
  { icon: <Users size={24} />, title: 'Skilled Workforce' },
  { icon: <BarChart3 size={24} />, title: 'High Volume Production' },
  { icon: <Timer size={24} />, title: 'Fast Turnaround' },
  { icon: <ClipboardCheck size={24} />, title: 'In-house Quality Control' },
  { icon: <Settings size={24} />, title: 'Precision Manufacturing' },
  { icon: <FileCheck size={24} />, title: 'Custom OEM Solutions' },
];

const AboutCapabilities = ({ addRevealRef }) => {
  return (
    <section className="about-capabilities-section" id="about-capabilities">
      <div className="container about-capabilities-grid">
        <div className="capabilities-left reveal reveal-left" ref={addRevealRef}>
          <h2 className="capabilities-main-title">Our<br />Capabilities</h2>
          <div className="precision-line"></div>
          <p className="capabilities-main-desc">
            Our capabilities are driven by precision engineering, advanced CNC technology, and efficient
            manufacturing processes, ensuring consistent quality, reliability, and performance in every
            brass component for diverse industrial applications worldwide.
          </p>
        </div>

        <div className="capabilities-right">
          <div className="hex-grid-container">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className={`capability-hex-item reveal reveal-up delay-${(i % 3) + 1}`}
                ref={addRevealRef}
              >
                <div className="hex-inner-content">
                  <div className="hex-icon-circle">
                    {cap.icon}
                  </div>
                  <h4 className="hex-title">{cap.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;

