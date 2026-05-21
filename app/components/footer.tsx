"use client";

import { Heart, ArrowUp } from "lucide-react";
import { Github, Instagram, LinkedIn, Youtube } from "./socialIcons";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    url: "https://id.linkedin.com/in/nahalil-muchtar-29501218b",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/nahlbee97?igsh=MTg1Z2txeWVyZzJoeg%3D%3D&utm_source=qr",
  },
  {
    name: "Youtube",
    icon: <Youtube />,
    url: "https://www.youtube.com/@NahalilMuchtar",
  },
  {
    name: "GitHub",
    icon: <Github />,
    url: "https://github.com/NahlBee97",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Using mycolor4 (#494953) for a grounding dark footer
    <footer className="bg-mycolor4 font-sans text-mycolor2 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mycolor1/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mycolor3/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        {}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              className="text-3xl font-bold tracking-tight text-mycolor2 hover:opacity-90 transition-opacity mb-2"
            >
              <span className="text-mycolor1">Nahl</span>Bee
            </a>
            <p className="text-mycolor2/60 max-w-sm text-sm">
              Crafting immersive and visually stunning web
              experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-mycolor2 font-semibold tracking-wider uppercase text-sm mb-4">
              Follow Me!
            </h2>
            <ul className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="blank"
                    aria-label={link.name}
                    /* Replaced standard hover with your #FF5656 red for a cohesive theme */
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-mycolor2 transition-all duration-300 hover:-translate-y-1 hover:bg-mycolor1 hover:border-mycolor1 hover:shadow-lg hover:shadow-mycolor1/30 group`}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {}
        {/* Divider Line */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mycolor2/50">
          {/* Copyright */}
          <p>© {currentYear} NahlBee. All rights reserved.</p>

          {/* Made with Love */}
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="text-mycolor1" /> in
            Indonesia
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-mycolor1 transition-colors duration-300 focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
