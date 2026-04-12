import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import QualityHero from '../components/quality/QualityHero';
import MetrologyHub from '../components/quality/MetrologyHub';
import MetrologyGrid from '../components/quality/MetrologyGrid';
import QualityCommitment from '../components/quality/QualityCommitment';

const Quality = () => {
  const addRevealRef = useScrollReveal();

  return (
    <div className="quality-page">
      {/* 1. Page Hero - Precision Instrumentation Hub */}
      <QualityHero />

      {/* 2. Metrology Hub - VMM Detail */}
      <MetrologyHub addRevealRef={addRevealRef} />

      {/* 3. Instruments Grid - Multi-tool cards */}
      <MetrologyGrid addRevealRef={addRevealRef} />

      {/* 4. Quality Commitment - Integrity + Zero + Performance */}
      <QualityCommitment addRevealRef={addRevealRef} />
    </div>
  );
};

export default Quality;
