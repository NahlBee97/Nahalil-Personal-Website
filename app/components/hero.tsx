import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

const customStyles = `
  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(40px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }
`;

const Hero = () => {
  return (
    <>
      <style>{customStyles}</style>
      
      {}
      <section className="relative w-full min-h-screen bg-mycolor2 overflow-hidden font-sans text-mycolor4">
        
        {/* Animated Background Blobs using explicit hex codes */}
        <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 bg-mycolor1 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 md:w-96 md:h-96 bg-mycolor3 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob delay-200"></div>
        <div className="absolute -bottom-8 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-mycolor1 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob delay-400"></div>

        {}
        <div className="container mx-auto px-6 md:px-12 min-h-dvh flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between relative z-10 gap-12 py-24 lg:py-0">
          
          {}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center items-center lg:items-start text-center lg:text-left">
            
            {/* Greeting Badge */}
            <div className="animate-fade-in-up flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/50 px-5 py-2.5 rounded-full shadow-sm">
              <Sparkles className="w-5 h-5 text-mybg-mycolor1" />
              <span className="text-mycolor4 font-medium tracking-wide text-sm md:text-base">Hello There, Welcome!</span>
            </div>

            {/* Name Heading */}
            <h1 className="animate-fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-mycolor4">
              I'm <br className="hidden lg:block"/>
              <span className="text-mycolor1 relative inline-block mt-2 lg:mt-0">
                Nahalil Muchtar
                {/* Subtle underline accent */}
                <svg className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-mybg-mycolor3 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Role / Subtitle */}
            <div className="animate-fade-in-up delay-200 flex items-center gap-3 mt-2">
              <div className="p-2.5 bg-mycolor3/10 rounded-xl hidden sm:block">
                <Terminal className="w-6 h-6 text-mybg-mycolor3" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-mycolor4">
                Full-Stack Web Developer
              </h2>
            </div>

            {/* Description */}
            <p className="animate-fade-in-up delay-300 mt-2 text-mycolor4/80 leading-relaxed max-w-lg text-base md:text-lg">
              Specializing in high-performance web applications. I craft pixel-perfect, responsive interfaces using <strong className="text-mycolor1 font-semibold">Next.js/React.js</strong>, <strong className="text-mycolor3 font-semibold">TypeScript</strong>, and <strong className="text-mycolor4 font-semibold">Tailwind CSS</strong>. Beyond the UI, I architect robust backend logic and real-time database systems utilizing <strong className="text-mycolor4 font-semibold">Prisma</strong> and <strong className="text-mycolor3 font-semibold">PostgreSQL</strong>.
            </p>

            {/* Call to Action Button */}
            <div className="animate-fade-in-up delay-400 mt-4 md:mt-6">
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-mycolor1 text-white font-medium text-lg shadow-lg shadow-mybg-mycolor1/30 transition-all duration-300 hover:bg-mycolor3 hover:shadow-mybg-mycolor3/40 hover:-translate-y-1 w-full sm:w-auto"
              >
                See My Works
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center relative animate-fade-in-up delay-500 mt-10 lg:mt-0">
            {/* Decorative background shapes behind the image */}
            <div className="absolute inset-0 bg-linear-to-tr from-mybg-mycolor1/10 to-mybg-mycolor3/10 rounded-full blur-3xl transform scale-150 animate-blob"></div>
            
            <div className="relative animate-float w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer rotating dashed ring */}
              <div className="absolute -inset-4 md:-inset-6 rounded-full border-2 border-dashed border-mybg-mycolor3/40 animate-[spin_12s_linear_infinite]"></div>
              
              {/* Image Container with inner shadow and solid border */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-mytext-mycolor4/20 relative z-10 bg-white">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 scale-150 hover:scale-160"
                  /* Note: Replaced with placeholder for demonstration, use your ./profile.jpeg */
                  src="./profile.jpeg"
                  alt="Nahalil Muchtar - Profile Image"
                />
              </div>

              {/* Small floating accent cards/badges - Hidden on very small screens to avoid clutter */}
              

              {/* Top-Left: React */}
              <div className="hidden sm:flex absolute top-4 -left-6 md:-left-10 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white items-center gap-2 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5">
                  <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                  <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
                <span className="text-sm font-bold text-mycolor4">React</span>
              </div>

              {/* Top-Right: Next.js */}
              <div className="hidden sm:flex absolute top-4 -right-4 md:-right-8 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white items-center gap-2 animate-float z-20" style={{ animationDelay: '1s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" className="w-5 h-5" fill="none">
                  <circle cx="90" cy="90" r="90" fill="black"/>
                  <path d="M140 135.5L80.5 59H69V121H79V76.5L131.5 142.5C134.5 140.5 137.5 138 140 135.5Z" fill="white"/>
                  <rect x="119" y="59" width="10" height="62" fill="url(#nextjs-grad)"/>
                  <defs>
                    <linearGradient id="nextjs-grad" x1="124" y1="59" x2="124" y2="121" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.6"/>
                      <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-sm font-bold text-mycolor4">Next.js</span>
              </div>

              {/* Middle-Left: TypeScript */}
              <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white items-center gap-2 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5.5 h-5.5 rounded-sm overflow-hidden">
                  <rect width="100" height="100" fill="#3178C6"/>
                  <text x="30" y="78" fill="white" fontSize="38" fontWeight="bold" fontFamily="sans-serif">T</text>
                  <text x="54" y="78" fill="white" fontSize="38" fontWeight="bold" fontFamily="sans-serif">S</text>
                </svg>
                <span className="text-sm font-bold text-mycolor4">TypeScript</span>
              </div>

                {/* Top-Center: Node.js */}
              <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-12 md:-right-16 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white items-center gap-2 animate-float z-20" style={{ animationDelay: '2s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 293" className="w-5 h-5" fill="#339933">
                  <path d="M128 0c-4.4 0-8.8 1.1-12.7 3.4L18.7 59.4c-7.8 4.5-12.7 13-12.7 22V195c0 9 4.9 17.5 12.7 22l96.6 55.9c3.9 2.3 8.3 3.4 12.7 3.4s8.8-1.1 12.7-3.4l96.6-55.9c7.8-4.5 12.7-13 12.7-22V81.4c0-9-4.9-17.5-12.7-22L140.7 3.4C136.8 1.1 132.4 0 128 0zm-8 45.4v194.2l-80.9-46.7V92.1l80.9-46.7z"/>
                </svg>
                <span className="text-sm font-bold text-mycolor4">Node.js</span>
              </div>

              {/* Bottom-Left: Tailwind CSS */}
              <div className="hidden sm:flex absolute bottom-4 -left-6 md:-left-10 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white items-center gap-2 animate-float z-20" style={{ animationDelay: '2.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-sm font-bold text-mycolor4">Tailwind CSS</span>
              </div>

              {/* Bottom-Right: PostgreSQL */}
              <div className="hidden sm:flex absolute bottom-4 -right-4 md:-right-8 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white items-center gap-2 animate-float z-20" style={{ animationDelay: '3s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5" fill="#336791">
                  <path d="M410.7 203.2c-5.4-31-25.1-56.1-53.8-68.5C335 125 306.9 123.4 280.4 129.5c-4-.8-8.2-1.3-12.4-1.3h-44.4c-4.2 0-8.4.5-12.4 1.3-26.5-6.1-54.6-4.5-76.5 5.2-28.7 12.4-48.4 37.5-53.8 68.5-3.3 18.9-1.3 38.3 5.4 56.4 1.1 2.9 2.5 5.7 4.1 8.4-11.4 18.9-18.9 41.2-21.2 65.4-.5 5.1-1.3 10.1-2.4 15.1l-10.4 46.5c-.8 3.5.7 7.1 3.7 8.9 1.6 1 3.4 1.5 5.2 1.5 1.3 0 2.6-.3 3.7-.9l35.6-18.7c17.5-9.2 33.3-21.5 46.6-36.2l3.4-3.7c18.5 13.9 41.5 22.3 66.4 23.3 4.1.2 8.2.3 12.3.3h10.3c4.1 0 8.2-.1 12.3-.3 24.9-1 47.9-9.4 66.4-23.3l3.4 3.7c13.3 14.7 29.1 27 46.6 36.2l35.6 18.7c1.1.6 2.4.9 3.7.9 1.8 0 3.6-.5 5.2-1.5 3-1.8 4.5-5.4 3.7-8.9l-10.4-46.5c-1.1-5-1.9-10-2.4-15.1-2.3-24.2-9.8-46.5-21.2-65.4 1.6-2.7 3-5.5 4.1-8.4 6.7-18.1 8.7-37.5 5.4-56.4z"/>
                </svg>
                <span className="text-sm font-bold text-mycolor4">PostgreSQL</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;