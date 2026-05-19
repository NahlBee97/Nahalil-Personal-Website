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
              A passionate and creative Front-End Developer with a keen eye for design 
              and a love for crafting seamless user experiences. My journey in the world 
              of web development began with a curiosity that quickly transformed into a 
              deep-rooted passion.
            </p>

            {/* Call to Action Button */}
            <div className="animate-fade-in-up delay-400 mt-4 md:mt-6">
              <a 
                href="#portofolio" 
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-mycolor1 text-white font-medium text-lg shadow-lg shadow-mybg-mycolor1/30 transition-all duration-300 hover:bg-mycolor3 hover:shadow-mybg-mycolor3/40 hover:-translate-y-1 w-full sm:w-auto"
              >
                See My Works
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {}
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
              <div className="hidden sm:flex absolute bottom-4 -left-6 md:-left-10 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white flex-items-center gap-2 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="w-3 h-3 rounded-full bg-mycolor1"></div>
                <span className="text-sm font-bold text-mycolor4">React.js</span>
              </div>
              <div className="hidden sm:flex absolute top-10 -right-4 md:-right-8 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl border border-white flex-items-center gap-2 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="w-3 h-3 rounded-full bg-mycolor3"></div>
                <span className="text-sm font-bold text-mycolor4">Node.js</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;