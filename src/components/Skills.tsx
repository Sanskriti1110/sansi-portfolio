import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Code, Wrench, Layers, Zap, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: Cpu,
    category: "Hardware Design",
    color: "from-blue-500 to-cyan-500",
    skills: ["Altium Designer", "Cadence Virtuoso", "PCB Design", "Schematic Capture", "FPGA", "nRF52840", "ESP32"]
  },
  {
    icon: Code,
    category: "Programming",
    color: "from-purple-500 to-pink-500",
    skills: ["SystemVerilog", "C/C++", "Python", "MATLAB", "SQL", "DataStage"]
  },
  {
    icon: Layers,
    category: "Digital Design",
    color: "from-orange-500 to-red-500",
    skills: ["VLSI", "RISC-V", "FPGA", "GTKWave", "Verilog", "45nm Technology"]
  },
  {
    icon: Zap,
    category: "Embedded Systems",
    color: "from-green-500 to-emerald-500",
    skills: ["RTOS", "MQTT", "WiFi", "LoRa", "I2C", "SPI", "UART"]
  },
  {
    icon: Wrench,
    category: "Tools & Frameworks",
    color: "from-yellow-500 to-orange-500",
    skills: ["Node-RED", "Firebase", "Git", "Linux", "AXI-Lite", "CLI"]
  },
  {
    icon: Database,
    category: "Systems & Architecture",
    color: "from-indigo-500 to-purple-500",
    skills: ["Cache Design", "Hazard Detection", "Pipeline Architecture", "IoT", "Circuit Optimization"]
  }
];

export const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 sm:px-8 lg:px-16 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning hardware design, embedded systems, and digital circuit development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all hover:scale-105 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
