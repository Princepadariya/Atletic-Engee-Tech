import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

// Components
import Hero from '../components/Hero';
import About from '../components/About';
import IndustryServe from '../components/IndustryServe';
import Performance from '../components/Performance';
import ComponentsOval from '../components/ComponentsOval';
import Quality from '../components/Quality';
import GlobalCTA from '../components/GlobalCTA';

const Home = () => {
  const addRevealRef = useScrollReveal();

  return (
    <>
      <Hero />
      <About addRevealRef={addRevealRef} />
      <IndustryServe addRevealRef={addRevealRef} />
      <Performance addRevealRef={addRevealRef} />
      <ComponentsOval addRevealRef={addRevealRef} />
      <Quality addRevealRef={addRevealRef} />
      <GlobalCTA addRevealRef={addRevealRef} />
    </>
  );
};

export default Home;
