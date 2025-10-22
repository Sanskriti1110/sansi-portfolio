import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    icon: FileText,
    iconColors: "from-purple-500 to-blue-500",
    bgGradient: "from-purple-500 to-blue-500",
    badge: "IEEE XPLORE",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    title: "IEEE Publication - Design and Optimization Study",
    description: "Advanced research in circuit design and optimization techniques for modern VLSI systems.",
    link: "https://ieeexplore.ieee.org/abstract/document/10403581"
  },
  {
    icon: BookOpen,
    iconColors: "from-pink-500 to-purple-500",
    bgGradient: "from-pink-500 to-purple-500",
    badge: "AIP PUBLISHING",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    title: "AIP Conference Proceedings - Sustainable Architecture",
    description: "Recontextualizing apartment complexes with sustainable and innovative architectural approaches.",
    link: "https://pubs.aip.org/aip/acp/article-abstract/2966/1/020014/3279446/Recontextualizing-the-apartment-complexes-with-a"
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-20 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Research <span className="text-primary">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Published research contributions in electrical engineering and architecture
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="rounded-lg border text-card-foreground shadow-sm overflow-hidden bg-card border-border group relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pub.bgGradient} opacity-0 group-hover:opacity-5 transition-all duration-300`}></div>
              
              {/* Card Content */}
              <div className="p-6 space-y-4 relative">
                {/* Badge at top */}
                <div className="flex justify-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${pub.badgeColor}`}>
                    {pub.badge}
                  </span>
                </div>

                {/* Icon and Title on same line */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${pub.iconColors} text-white flex-shrink-0`}>
                    <pub.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold tracking-tight text-xl mb-2">
                      {pub.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed">
                  {pub.description}
                </p>

                {/* Button */}
                <Button 
                  className="w-full gradient-accent text-white border-0 hover:opacity-90"
                  asChild
                >
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read Full Paper
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
