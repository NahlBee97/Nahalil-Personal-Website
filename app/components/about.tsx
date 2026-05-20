import {
  Code2,
  Briefcase,
  Handshake,
  Mail,
  ArrowRight,
} from "lucide-react";
import FadeInSection from "./fadeInSection";

const About = () => {
  return (
    // We use a white background here to contrast with the #EDF2F6 of the Hero section
    <section
      id="about"
      className="py-24 md:py-32 bg-white font-sans text-mycolor4 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Grid Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Column: Image & Badges */}
          <div className="w-full lg:w-5/12 relative">
            <FadeInSection direction="right">
              {/* Decorative Background Block */}
              <div className="absolute -inset-4 md:-inset-6 bg-mycolor2 rounded-3xl transform -rotate-3 z-0"></div>
              <div className="absolute -inset-4 md:-inset-6 bg-linear-to-br from-mycolor1/10 to-mycolor3/10 rounded-3xl transform rotate-3 z-0 blur-sm"></div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-mycolor4/10">
                <img
                  /* Note: Replaced with placeholder for demonstration, swap with ./images/Profile Image2.jpeg */
                  src="./profile.jpeg"
                  alt="Nahalil - Front-End Developer"
                  className="w-full h-auto aspect-4/5 object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Gradient for polish */}
                <div className="absolute inset-0 bg-linear-to-t from-mycolor4/40 to-transparent opacity-60"></div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl shadow-mycolor3/20 border border-mycolor2 z-20 flex items-center gap-4 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center justify-center w-12 h-12 bg-mycolor3/10 rounded-full text-mycolor3">
                  <Code2 size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-3xl font-black text-mycolor4">
                    1+
                  </p>
                  <p className="text-sm font-medium text-mycolor4/70 uppercase tracking-wide">
                    Years Exp.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
            {/* Header Area */}
            <div>
              <FadeInSection delay={100} direction="left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-12 h-1 bg-mycolor1 rounded-full"></span>
                  <span className="text-mycolor1 font-bold uppercase tracking-wider text-sm">
                    Discover More
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mycolor4 leading-tight">
                  About <span className="text-mycolor3">Me!</span>
                </h1>
              </FadeInSection>

              <FadeInSection delay={200} direction="left">
                <p className="mt-6 text-lg text-mycolor4/80 leading-relaxed">
                  Hey there!{" "}
                  <span className="inline-block animate-[wave_2.5s_ease-in-out_infinite] origin-[70%_70%]">
                    👋
                  </span>{" "}
                  I'm Nahalil, a full-stack web developer who builds
                  polished user experiences while also handling
                  backend architecture and APIs. With a mix of design
                  sensibility and technical know-how, I bring ideas to
                  life across the full web stack.
                </p>
              </FadeInSection>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Background Card */}
              <FadeInSection delay={300} direction="up">
                <div className="bg-mycolor2/50 hover:bg-mycolor2 transition-colors duration-300 p-6 rounded-2xl border border-transparent hover:border-mycolor3/20 h-full">
                  <div className="w-12 h-12 bg-mycolor3/10 text-mycolor3 rounded-xl flex items-center justify-center mb-4">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-mycolor4 mb-3">
                    A Bit of Background
                  </h2>
                  <p className="text-mycolor4/70 leading-relaxed text-sm">
                    With 1 year of experience in the industry, I've had the
                    opportunity to work on diverse projects ranging
                    from sleek portfolio sites to robust e-commerce
                    platforms. Each project has been a chance to
                    learn, grow, and refine my skills.
                  </p>
                </div>
              </FadeInSection>

              {/* Collaborate Card */}
              <FadeInSection delay={400} direction="up">
                <div className="bg-mycolor1/5 hover:bg-mycolor1/10 transition-colors duration-300 p-6 rounded-2xl border border-transparent hover:border-mycolor1/20 h-full">
                  <div className="w-12 h-12 bg-mycolor1/10 text-mycolor1 rounded-xl flex items-center justify-center mb-4">
                    <Handshake size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-mycolor4 mb-3">
                    Let's Collaborate!
                  </h2>
                  <p className="text-mycolor4/70 leading-relaxed text-sm">
                    Whether you're a fellow developer, a designer, or
                    a business owner looking to enhance your online
                    presence, I'm always up for exciting projects.
                    Let's turn your vision into a digital masterpiece!
                  </p>
                </div>
              </FadeInSection>
            </div>

            {/* Action Area */}
            <FadeInSection delay={500} direction="up">
              <div className="mt-4 flex items-center gap-6">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-mycolor4 text-white font-medium shadow-lg hover:bg-mycolor3 hover:shadow-mycolor3/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail size={18} />
                  Get in Touch
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Global styles for specific animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes wave {
          0% { transform: rotate( 0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
      `,
        }}
      />
    </section>
  );
};

export default About;
