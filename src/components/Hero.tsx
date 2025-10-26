import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown, ArrowDown } from "lucide-react";
import headshotImage from "@/assets/headshot.jpg";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 sm:px-8 lg:px-16" style={{ backgroundImage: 'linear-gradient(135deg, rgb(13, 13, 13) 0%, rgb(20, 14, 27) 50%, rgb(26, 15, 36) 100%)' }}>
      {/* Animated background elements - UPDATED: Enhanced for gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* UPDATED: Optimized layout for the gradient background */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center max-w-5xl mx-auto">
          {/* Left column - Image - UPDATED: Perfect proportions matching Image 1 */}
          <div className="flex justify-center order-1 lg:order-1 animate-scale-in flex-shrink-0">
            <div className="relative">
              {/* Soft outward glow effect - multiple layers for depth */}
              <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl opacity-70 animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/25 to-primary/30 rounded-full blur-[80px] opacity-60 scale-125"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-50 scale-150"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                <img
                  src={headshotImage}
                  alt="Sanskriti Binani - Hardware Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column - Text content - UPDATED: Enhanced typography and spacing */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-2 animate-fade-in flex-1 max-w-2xl">
            <div className="inline-block">
              <span className="px-4 py-2 bg-card/60 backdrop-blur-sm border border-primary/30 rounded-full text-muted-foreground text-sm font-medium flex items-center gap-2">
                👋 Hi, I'm Sanskriti
              </span>
            </div>

            {/* UPDATED: Perfect font sizing matching Image 1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Sanskriti Binani
              <br />
              <span className="text-primary text-xl sm:text-2xl lg:text-3xl">
                <Typewriter
                  options={{
                    strings: ['Hardware Engineer', 'FPGA Developer', 'Embedded Systems Designer'],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-light">
              Electrical Engineering
              <br />
              <span className="text-foreground font-medium">University of Pennsylvania</span>
            </p>

            {/* UPDATED: Enhanced description with better contrast */}
            <p className="text-sm sm:text-base text-muted-foreground/90 max-w-lg leading-relaxed">
              Designing cutting-edge hardware systems from PCB to firmware, specializing in embedded systems and FPGA development
            </p>

            {/* CTA Buttons - UPDATED: Enhanced styling for gradient background */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all font-medium"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-card/40 backdrop-blur-sm transition-all font-medium"
                asChild
              >
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <FileDown size={20} />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links - UPDATED: Enhanced with backdrop blur */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://www.linkedin.com/in/sanskriti-binani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card/40 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
              <a
                href="https://github.com/Sanskriti1110"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card/40 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a
                href="mailto:sbinani@seas.upenn.edu"
                className="w-12 h-12 rounded-lg bg-card/40 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail size={20} className="text-foreground" />
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:flex justify-center lg:justify-start pt-8 animate-bounce">
              <ArrowDown size={24} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
