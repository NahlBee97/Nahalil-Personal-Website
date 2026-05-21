"use client";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
} from "lucide-react";
import { useState } from "react";
import FadeInSection from "./fadeInSection";
import { projectsData } from "../data/projects";
import { Github } from "./socialIcons";
import Link from "next/link";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handlers for slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    // We use the #EDF2F6 background here to alternate with the white About section
    <section
      id="projects"
      className="py-24 md:py-32 bg-mycolor2 font-sans text-mycolor4 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-mycolor1/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-mycolor3/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInSection direction="up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="text-mycolor3" size={24} />
              <span className="text-mycolor3 font-bold uppercase tracking-wider text-sm">
                Projects
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mycolor4">
              See My <span className="text-mycolor1">Works!</span>
            </h1>
            <p className="mt-4 text-mycolor4/70 max-w-2xl mx-auto">
              Swipe through some of my recent projects. Each one is a
              unique challenge that allowed me to explore new
              technologies and refine my skills.
            </p>
          </FadeInSection>
        </div>

        {/* Slider Container */}
        <FadeInSection delay={200} direction="up">
          <div className="relative max-w-6xl mx-auto group">
            {/* The actual slider viewport (hides overflowing slides) */}
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-mycolor4/10 bg-white">
              {/* The sliding track */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="w-full flex-none flex flex-col lg:flex-row"
                  >
                    {/* Left: Project Image */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden group/image aspect-video lg:aspect-auto h-64 lg:h-128">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fill"
                      />
                      <div className="absolute inset-0 bg-mycolor4/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Right: Project Details */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                      <h3 className="text-3xl font-bold text-mycolor4 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-mycolor4/70 leading-relaxed mb-8 text-lg">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 bg-mycolor3/10 text-mycolor3 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4 mt-auto">
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-mycolor1 text-white rounded-full font-medium transition-all hover:bg-mycolor3 hover:shadow-lg hover:shadow-mycolor3/30 hover:-translate-y-1"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </Link>
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-mycolor2 text-mycolor4 rounded-full font-medium transition-all hover:bg-mycolor4 hover:text-white"
                        >
                          <Github />
                          Source Code
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Controls (Hidden on very small screens, visible on md+) */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute top-1/2 -left-6 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg items-center justify-center text-mycolor4 hover:text-mycolor1 hover:scale-110 transition-all z-20 border border-mycolor2"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg items-center justify-center text-mycolor4 hover:text-mycolor1 hover:scale-110 transition-all z-20 border border-mycolor2"
              aria-label="Next Slide"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Mobile Arrows & Pagination Dots */}
          <div className="flex flex-col items-center mt-8">
            {/* Mobile-only buttons */}
            <div className="flex md:hidden gap-4 mb-6">
              <button
                onClick={prevSlide}
                className="p-3 bg-white rounded-full shadow text-mycolor4"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white rounded-full shadow text-mycolor4"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-3 bg-mycolor1"
                      : "w-3 h-3 bg-mycolor4/20 hover:bg-mycolor3/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;
