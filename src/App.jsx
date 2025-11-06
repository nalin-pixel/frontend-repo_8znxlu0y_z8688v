import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechShowcase from './components/TechShowcase';
import CTA from './components/CTA';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
          H2 Velocity
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#performance" className="hover:text-white">Performance</a>
          <a href="#learn" className="hover:text-white">Technology</a>
          <a href="#" className="hover:text-white">Reserve</a>
        </nav>
        <a href="#" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">Preorder</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','ui-sans-serif']">
      <Navbar />
      <Hero />
      <Features />
      <TechShowcase />
      <CTA />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-white/60">© {new Date().getFullYear()} H2 Velocity — Zero Emissions, Maximum Thrill.</footer>
    </div>
  );
}
