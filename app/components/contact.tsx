import { Mail, MapPin, Send, MessageSquare, Phone } from 'lucide-react';
import FadeInSection from './fadeInSection';

const Contact = () => {
  return (
    // We use white bg to alternate with the previous section
    <section id="contact" className="py-24 md:py-32 bg-white font-sans text-mycolor4 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mycolor1/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mycolor3/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInSection direction="up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="text-mycolor1" size={24} />
              <span className="text-mycolor1 font-bold uppercase tracking-wider text-sm">Let's Talk</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mycolor4">
              Contact <span className="text-mycolor3">Me!</span>
            </h1>
            <p className="mt-4 text-mycolor4/70 max-w-2xl mx-auto text-lg">
              Have a project in mind, a question, or just want to say hi? I'd love to hear from you. 
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </FadeInSection>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info & Graphic */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            <FadeInSection direction="right" delay={100}>
              
              {/* Contact Information Cards */}
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-mycolor2/50 rounded-2xl border border-transparent hover:border-mycolor3/20 hover:bg-mycolor2 transition-all duration-300">
                  <div className="w-12 h-12 bg-mycolor3/10 text-mycolor3 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mycolor4 mb-1">Email</h3>
                    <a href="mailto:hello@nahalil.com" className="text-mycolor4/70 hover:text-mycolor1 transition-colors">
                      hello@nahalil.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-mycolor2/50 rounded-2xl border border-transparent hover:border-mycolor1/20 hover:bg-mycolor2 transition-all duration-300">
                  <div className="w-12 h-12 bg-mycolor1/10 text-mycolor1 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mycolor4 mb-1">Location</h3>
                    <p className="text-mycolor4/70">
                      Indonesia <br/> Open to remote opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Image/Graphic replacing standard email.svg */}
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-linear-to-br from-mycolor2 to-white border border-mycolor2 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="relative z-10 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-mycolor1 group-hover:-translate-y-2 transition-transform duration-500">
                   <Send size={32} />
                </div>
              </div>

            </FadeInSection>
          </div>

          {/* Right Column: The Form */}
          <div className="w-full lg:w-7/12">
            <FadeInSection direction="left" delay={200}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-mycolor4/5 border border-mycolor2">
                
                <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="b3bbce48-e7dd-432f-a9db-96dd89ca92d2" />
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-mycolor4 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 bg-mycolor2/50 border-2 border-transparent text-mycolor4 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-mycolor3 placeholder:text-mycolor4/40"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-mycolor4 ml-1">Your Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="john@example.com"
                      required
                      className="w-full px-5 py-4 bg-mycolor2/50 border-2 border-transparent text-mycolor4 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-mycolor3 placeholder:text-mycolor4/40"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-mycolor4 ml-1">Your Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      placeholder="How can I help you?"
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-mycolor2/50 border-2 border-transparent text-mycolor4 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-mycolor3 placeholder:text-mycolor4/40 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="group mt-4 flex items-center justify-center gap-2 w-full py-4 bg-mycolor1 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-mycolor3 hover:shadow-lg hover:shadow-mycolor3/30 hover:-translate-y-1 active:scale-95"
                  >
                    Send Message
                    <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
                
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;