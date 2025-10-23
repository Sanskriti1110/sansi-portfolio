import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Cpu, Shirt, Blocks, Zap } from "lucide-react";
import { useState } from "react";
import topPcbImg from "@/assets/foldeasy-top-pcb.jpg";
import bottomPcbImg from "@/assets/foldeasy-bottom-pcb.jpg";
import blockDiagramImg from "@/assets/foldeasy-block-diagram.png";
import dashboardImg from "@/assets/foldeasy-dashboard.png";
import noderedImg from "@/assets/foldeasy-nodered.png";
import mcaSchematicImg from "@/assets/mca-schematic.png";
import mcaSymbolImg from "@/assets/mca-symbol.png";
import mcaVerification from "@/assets/mca-verification.jpg";
import mcaDelaySchImg from "@/assets/mca-delay-sch.png";
import mcaDelayGraph from "@/assets/mca-delay-graph.jpg";
import mcaEnergyGraph from "@/assets/mca-energy-graph.jpg";
import mcaEnergyCalcImg from "@/assets/mca-energy-calc.png";
import mcaLeakageSchImg from "@/assets/mca-leakage-sch.png";
import mcaLeakageMinGraph from "@/assets/mca-leakage-min-graph.jpg";
import mcaLeakageCalcImg from "@/assets/mca-leakage-calc.png";


const projects = [
  {
    icon: Cpu,
    iconColors: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500 to-cyan-500",
    title: "RISC-V Processor Design",
    description: "Built a fully pipelined RISC-V processor in SystemVerilog with cache integration, hazard detection, and AXI-Lite interface. Deployed on FPGA (Radiona ULX3S).",
    tags: ["SystemVerilog", "FPGA", "GTKWave", "RISC-V"],
    link: "https://github.com/Sanskriti1110"
  },
  {
    icon: Shirt,
    iconColors: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500 to-pink-500",
    title: "FoldEasy - Automated Clothes Folding Machine",
    description: "Designed 4-layer PCB with SAMW25 microcontroller, RTOS-based firmware with CLI and secure bootloader. Integrated MQTT protocol for Node-RED dashboard.",
    tags: ["Altium Designer", "RTOS", "MQTT", "Node-RED"],
    link: "https://github.com/Sanskriti1110"
  },
  {
    icon: Blocks,
    iconColors: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500 to-red-500",
    title: "Configurable Logic Block (CLB) for FPGA",
    description: "Transistor-level CLB design in Cadence with 16-bit SIPO shift register, SRAM array, and LUT. Achieved 0.6 GHz operating frequency with 874.5 fJ energy consumption.",
    tags: ["Cadence Virtuoso", "VLSI", "45nm Technology"],
    link: "https://github.com/Sanskriti1110"
  },
  {
    icon: Zap,
    iconColors: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500 to-emerald-500",
    title: "8-bit Manchester Carry Adder",
    description: "Optimized adder design with Carry Bypass Logic achieving 30% reduction in propagation delay and 38.52% decrease in leakage energy.",
    tags: ["Cadence Virtuoso", "Circuit Optimization"],
    link: "https://github.com/Sanskriti1110"
  }
];

const foldEasyMedia = [
  { type: "image", src: topPcbImg, alt: "FoldEasy Top PCB", title: "Top PCB" },
  { type: "image", src: bottomPcbImg, alt: "FoldEasy Bottom PCB", title: "Bottom PCB" },
  { type: "image", src: blockDiagramImg, alt: "FoldEasy System Block Diagram", title: "Block Diagram" },
  { type: "image", src: dashboardImg, alt: "FoldEasy Dashboard", title: "Dashboard" },
  { type: "image", src: noderedImg, alt: "FoldEasy Node-RED Backend", title: "Node-RED" },
  { type: "video", src: "https://drive.google.com/file/d/1vTpkGeL2Uh_pKV8Ku1coR16XFbSWJvqz/preview", alt: "FoldEasy Demo Video", title: "Demo Video" }
];

const mcaMedia = [
  { type: "image", src: mcaSchematicImg, alt: "8-bit MCA Schematic", title: "Full Schematic" },
  { type: "image", src: mcaSymbolImg, alt: "8-bit MCA Symbol", title: "Symbol" },
  { type: "image", src: mcaVerification, alt: "8-bit MCA Verification", title: "8-bit MCA Verification" },
  { type: "image", src: mcaDelaySchImg, alt: "MCA Delay Schematic", title: "Delay Test Schematic" },
  { type: "image", src: mcaDelayGraph, alt: "MCA Delay Analysis", title: "Delay Test Analysis" },
  { type: "image", src: mcaEnergyGraph, alt: "MCA Energy Analysis", title: "Energy Test Analysis" },
  { type: "image", src: mcaEnergyCalcImg, alt: "MCA Energy Calculation", title: "Energy Calculation" },
  { type: "image", src: mcaLeakageSchImg, alt: "MCA Leakage Schematic", title: "Leakage Test Schematic" },
  { type: "image", src: mcaLeakageMinGraph, alt: "MCA Leakage Analysis", title: "Min Leakage Test Analysis" },
  { type: "image", src: mcaLeakageCalcImg, alt: "MCA Leakage Calculation", title: "Leakage Calculation" }
];

export const Projects = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16" style={{ backgroundImage: 'linear-gradient(135deg, rgb(13, 13, 13) 0%, rgb(20, 14, 27) 50%, rgb(26, 15, 36) 100%)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of hardware, embedded systems, and FPGA projects demonstrating end-to-end engineering
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Project Cards - FIXED: Increased gap and margins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 px-2 sm:px-4">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="rounded-lg border text-card-foreground shadow-sm overflow-hidden card-hover bg-card border-border group relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* FIXED: Background glow uses the specific icon gradient colors */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-5 transition-smooth`}></div>
              
              {/* FIXED: Card Header with icon and title on same line */}
              <CardHeader className="flex flex-col space-y-1.5 p-6 relative">
                <div className="flex items-start gap-4 mb-2">
                  {/* Icon */}
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.iconColors} text-white`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  {/* Title on same line */}
                  <div className="flex-1">
                    <h3 className="font-semibold tracking-tight text-xl mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                {/* Description */}
                <p className="text-muted-foreground text-base">
                  {project.description}
                </p>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="p-6 pt-0 relative">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Button */}
                {(index === 1 || index === 3) ? (
                  <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 w-full gradient-accent text-white border-0 hover:opacity-90"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-5xl h-[95vh] overflow-hidden flex flex-col p-3 sm:p-6">
                      <DialogHeader className="flex-shrink-0 pb-2">
                        <DialogTitle className="text-lg sm:text-2xl font-bold">{project.title}</DialogTitle>
                        <p className="text-muted-foreground text-xs sm:text-sm pt-2">{project.description}</p>
                      </DialogHeader>
                      <div className="flex-1 min-h-0 overflow-hidden">
                        <Carousel className="w-full h-full">
                          <CarouselContent className="h-full">
                            {(index === 1 ? foldEasyMedia : mcaMedia).map((media, mediaIndex) => (
                              <CarouselItem key={mediaIndex} className="h-full flex items-center justify-center">
                                <div className="w-full h-full flex flex-col py-2">
                                  <h3 className="text-sm sm:text-lg font-semibold mb-2 text-center flex-shrink-0">{media.title}</h3>
                                  <div className="flex-1 min-h-0 flex items-center justify-center px-2 sm:px-4">
                                    {media.type === "image" ? (
                                      <img 
                                        src={media.src} 
                                        alt={media.alt}
                                        className="max-w-full max-h-[calc(95vh-180px)] w-auto h-auto object-contain rounded-lg"
                                      />
                                    ) : (
                                      <div className="w-full h-full max-w-full" style={{ maxHeight: 'calc(95vh - 180px)' }}>
                                        <iframe
                                          src={media.src}
                                          className="w-full h-full rounded-lg"
                                          allow="autoplay"
                                          allowFullScreen
                                        ></iframe>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-1 sm:left-2" />
                          <CarouselNext className="right-1 sm:right-2" />
                        </Carousel>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 w-full gradient-accent text-white border-0 hover:opacity-90"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            More projects and detailed documentation available on GitHub
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-border hover:bg-card text-sm hover:shadow-md transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Sanskriti1110" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
