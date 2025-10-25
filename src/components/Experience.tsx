import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    icon: Briefcase,
    role: "Hardware Engineering Intern",
    type: "Sole Contributor",
    company: "FliterFox Inc.",
    location: "Remote",
    period: "May 2025 - Aug 2025",
    responsibilities: [
      "Led hardware, firmware, and cloud development, designing PCB prototypes (Altium) for ESP32-based systems",
      "Implemented wireless communication (WiFi, LoRa), OTAFU, and secure cloud dashboard (Firebase) with real-time monitoring",
      "Delivered fully functional prototypes with deep sleep capabilities for battery optimization"
    ]
  },
  {
    icon: GraduationCap,
    role: "Researcher",
    company: "GRASP Lab - UPenn",
    location: "Philadelphia, PA",
    period: "Jan 2025 - Aug 2025",
    responsibilities: [
      "Designing a 2-layer PCB using Altium Designer for efficient operation of a single Motor Drone",
      "Achieved 1M sampling rate using nRF52840 microcontroller for real-time motor data acquisition",
      "Conducting experiments to optimize control and validate system performance"
    ]
  },
  {
    icon: Briefcase,
    role: "Teaching Assistant",
    company: "Penn GEMS Workshop",
    location: "Philadelphia, PA",
    period: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Mentored high school students in electronics and embedded systems through hands-on projects",
      "Guided teams in designing PCBs, programming microcontrollers, and implementing IoT solutions",
      "Developed curriculum materials for teaching fundamental hardware concepts"
    ]
  },
  {
    icon: Briefcase,
    role: "Embedded Systems Engineer Intern",
    company: "Ather Energy Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Jan 2023 - Jun 2023",
    responsibilities: [
      "Designed and implemented embedded solutions for electric vehicle systems",
      "Worked on motor control algorithms and battery management systems",
      "Collaborated with cross-functional teams on product development"
    ]
  }
];

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Intersection Observer for cards
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });
    observers.push(cardObserver);

    // Scroll handler for timeline progress
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        const visibleTop = Math.max(0, windowHeight - timelineTop);
        const progress = Math.min(100, (visibleTop / timelineHeight) * 100);
        setTimelineProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-6 sm:px-8 lg:px-16" style={{ backgroundImage: 'linear-gradient(135deg, rgb(13, 13, 13) 0%, rgb(20, 14, 27) 50%, rgb(26, 15, 36) 100%)' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional experiences and research shaping my engineering career
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line - static background (left side on mobile, center on desktop) */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-0.5 h-full bg-border/30"></div>
          
          {/* Timeline line - animated progress */}
          <div 
            className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transition-all duration-500 ease-out"
            style={{ height: `${timelineProgress}%` }}
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col gap-8 transition-all duration-700 ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline dot with animation (left side on mobile, center on desktop) */}
                <div 
                  className={`absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 transition-all duration-500 ${
                    visibleItems.has(index)
                      ? 'scale-100 opacity-100'
                      : 'scale-0 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 rounded-full bg-primary ${visibleItems.has(index) ? 'animate-ping' : ''}`}></div>
                </div>

                {/* Content card (left margin on mobile for timeline space) */}
                <Card className="flex-1 ml-12 lg:ml-0 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 group lg:max-w-[calc(50%-2rem)]">
                  <div className="p-6 lg:p-8 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <exp.icon className="text-primary" size={24} />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          {exp.type && (
                            <p className="text-sm text-primary italic">{exp.type}</p>
                          )}
                          <p className="text-primary font-semibold">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">
                            {exp.location} • {exp.period}
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1 lg:max-w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
