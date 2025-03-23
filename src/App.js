import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <Navbar />
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
