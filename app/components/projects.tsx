"use client"

import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from 'lucide-react';
import { useState } from 'react';
import FadeInSection from './fadeInSection';

// Dummy data for the portfolio slider - Replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with a modern UI, robust product filtering, shopping cart functionality, and secure checkout integration. Built with performance and user experience in mind.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "An interactive analytics dashboard providing real-time financial data visualization. Includes customizable widgets, dark mode support, and seamless data fetching from external APIs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Recharts", "Firebase"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A responsive social networking application allowing users to share posts, follow friends, and engage in real-time messaging. Features a sleek, intuitive mobile-first interface.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Redux", "Express", "Socket.io"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Creative Portfolio",
    description: "A visually stunning, interactive portfolio template designed for creative professionals. Features smooth scroll animations, dynamic project galleries, and a contact management system.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "GSAP", "Sass", "GraphQL"],
    liveUrl: "#",
    repoUrl: "#"
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handlers for slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    // We use the #EDF2F6 background here to alternate with the white About section
    <section id="projects" className="py-24 md:py-32 bg-mycolor2 font-sans text-mycolor4 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-mycolor1/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-mycolor3/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInSection direction="up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="text-mycolor3" size={24} />
              <span className="text-mycolor3 font-bold uppercase tracking-wider text-sm">Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mycolor4">
              See My <span className="text-mycolor1">Works!</span>
            </h1>
            <p className="mt-4 text-mycolor4/70 max-w-2xl mx-auto">
              Swipe through some of my recent projects. Each one is a unique challenge that allowed me to explore new technologies and refine my skills.
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
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projectsData.map((project) => (
                  <div 
                    key={project.id} 
                    className="min-w-full shrink-0 flex flex-col lg:flex-row"
                  >
                    {/* Left: Project Image */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden group/image aspect-video lg:aspect-auto h-64 lg:h-125">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                      />
                      <div className="absolute inset-0 bg-mycolor4/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Right: Project Details */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                      <h3 className="text-3xl font-bold text-mycolor4 mb-4">{project.title}</h3>
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
                        <a 
                          href={project.liveUrl}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-mycolor1 text-white rounded-full font-medium transition-all hover:bg-mycolor3 hover:shadow-lg hover:shadow-mycolor3/30 hover:-translate-y-1"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                        <a 
                          href={project.repoUrl}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-mycolor2 text-mycolor4 rounded-full font-medium transition-all hover:bg-mycolor4 hover:text-white"
                        >
                          {/* <Github size={18} /> */}
                          Source Code
                        </a>
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
              <button onClick={prevSlide} className="p-3 bg-white rounded-full shadow text-mycolor4"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} className="p-3 bg-white rounded-full shadow text-mycolor4"><ChevronRight size={24} /></button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index 
                      ? 'w-8 h-3 bg-mycolor1' 
                      : 'w-3 h-3 bg-mycolor4/20 hover:bg-mycolor3/50'
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