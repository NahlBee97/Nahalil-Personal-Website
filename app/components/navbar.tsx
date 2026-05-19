"use client"

import { Menu, X, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "About", destination: "#about" },
    { name: "Projects", destination: "#projects" },
    { name: "Contact", destination: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans ${
        scrolled 
          ? 'bg-mycolor4/95 backdrop-blur-md shadow-lg border-b border-white/10 py-2' 
          : 'bg-mycolor4 py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <a href="#home" className="text-3xl font-bold tracking-tight text-mycolor2 hover:opacity-90 transition-opacity">
            <span className="text-mycolor1">Nahl</span>Bee
          </a>

          {}
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {links.map((link, index) => (
                <li key={index} className="relative group">
                  <a 
                    href={link.destination}
                    className="text-mycolor2 font-medium text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-mycolor1"
                  >
                    {link.name}
                  </a>
                  {/* Sliding Underline Animation */}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-mycolor1 text-mycolor1 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </li>
              ))}
            </ul>

            {}
            {/* Desktop Button */}
            <button className="group flex items-center gap-2 bg-mycolor1 text-white px-5 py-2.5 rounded-full font-medium shadow-lg shadow-mycolor1 transition-all duration-300 hover:bg-mycolor3 hover:shadow-mycolor3/40 hover:-translate-y-0.5">
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
              Download CV
            </button>
          </nav>

          {}
          {/* Mobile Menu Toggler */}
          <button 
            className="md:hidden text-mycolor2 hover:text-mycolor1 transition-colors p-2"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {}
      {/* Mobile Nav Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-mycolor4 border-b border-white/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          <ul className="flex flex-col gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.destination}
                  onClick={() => setIsOpen(false)}
                  className="block text-mycolor2 font-medium text-lg hover:text-mycolor1 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="flex items-center justify-center gap-2 w-full bg-mycolor1 text-white px-5 py-3 rounded-xl font-medium shadow-md transition-all active:scale-95">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;