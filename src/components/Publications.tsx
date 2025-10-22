import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    icon: FileText,
    iconColor: "from-purple-500 to-blue-500",
    badge: "IEEE XPLORE",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    title: "IEEE Publication - Design and Optimization Study",
    description: "Advanced research in circuit design and optimization techniques for modern VLSI systems.",
    link: "https://ieeexplore.ieee.org/abstract/document/10403581"
  },
  {
    icon: BookOpen,
    iconColor: "from-pink-500 to-purple-500",
    badge: "AIP PUBLISHING",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    title: "AIP Conference Proceedings - Sustainable Architecture",
    description: "Recontextualizing apartment complexes with sustainable and innovative architectural approaches.",
    link: "https://pubs.aip.org/aip/acp/article-abstract/2966/1/020014/3279446/Recontextualizing-the-apartment-complexes-with-a"
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-20 px-6 sm:px-8 lg:px-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
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
              className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pub.iconColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <pub.icon className="text-white" size={32} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${pub.badgeColor}`}>
                    {pub.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ExternalLink size={18} />
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
