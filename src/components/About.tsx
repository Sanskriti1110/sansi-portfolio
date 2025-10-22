import { Card } from "@/components/ui/card";
import { Atom, FlaskConical, Microscope, BookOpen } from "lucide-react";

const interests = [
  {
    icon: Atom,
    iconColor: "from-purple-500 to-pink-500",
    title: "Circuit Design",
    description: "VLSI and digital integrated circuit design"
  },
  {
    icon: FlaskConical,
    iconColor: "from-pink-500 to-purple-500",
    title: "PCB Development",
    description: "Multi-layer PCB design and prototyping"
  },
  {
    icon: Microscope,
    iconColor: "from-purple-500 to-blue-500",
    title: "FPGA & SoC",
    description: "Hardware acceleration and processor design"
  },
  {
    icon: BookOpen,
    iconColor: "from-blue-500 to-purple-500",
    title: "IoT Systems",
    description: "Wireless communication and edge computing"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-8 lg:px-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - About text */}
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed animate-slide-in-left">
            <p>
              I'm a Masters student in Electrical Engineering at the University of Pennsylvania, specializing in hardware and embedded systems with a strong focus on PCB design, FPGA development, and digital circuit design.
            </p>
            <p>
              My expertise spans from low-level hardware design using Cadence Virtuoso to high-level system integration with embedded firmware. I've designed RISC-V processors, multi-layer PCBs, and implemented wireless IoT systems with real-time communication protocols.
            </p>
            <p>
              Currently researching at GRASP Lab and working on cutting-edge projects involving motor drones and high-speed data acquisition. I'm passionate about teaching electronics to the next generation through the Penn GEMS Workshop.
            </p>
          </div>

          {/* Right column - Research Interests */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">Research Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-start space-y-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${interest.iconColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <interest.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
