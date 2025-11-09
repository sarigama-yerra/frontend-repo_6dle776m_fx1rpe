import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ridwan Surya Pamuji.
      </footer>
    </div>
  );
}

export default App;
