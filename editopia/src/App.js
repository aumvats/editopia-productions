import React from 'react';
import './App.css';
import Hero from './Hero';
import ComparisonSection from './ComparisonSection';
import ProjectCard from './ProjectCard';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <ComparisonSection />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;