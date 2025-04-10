
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tutorials = [
  {
    title: "Paper Crane",
    image: "https://images.unsplash.com/photo-1581290122395-372742bf1ad7?auto=format&fit=crop&q=80&w=800",
    description: "Learn to fold the iconic symbol of peace and hope",
    difficulty: "Medium",
    time: "15 mins"
  },
  {
    title: "Lotus Flower",
    image: "https://images.unsplash.com/photo-1593540446869-a1a2188848e1?auto=format&fit=crop&q=80&w=800",
    description: "Create a beautiful blooming lotus flower",
    difficulty: "Easy",
    time: "10 mins"
  },
  {
    title: "Jumping Frog",
    image: "https://images.unsplash.com/photo-1544387541-7aa5c3b9c4de?auto=format&fit=crop&q=80&w=800",
    description: "Fold a frog that actually jumps when pressed",
    difficulty: "Easy",
    time: "8 mins"
  },
  {
    title: "Dragon",
    image: "https://images.unsplash.com/photo-1582378553458-1af6067228ad?auto=format&fit=crop&q=80&w=800",
    description: "Master this challenging mythical creature design",
    difficulty: "Complex",
    time: "45 mins"
  }
];

export default function TutorialSection() {
  return (
    <section className="py-20 bg-origami-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Tutorials</h2>
            <p className="text-lg text-gray-600">
              Start with these popular origami designs
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-transparent hover:bg-transparent text-primary hover:text-origami-purple flex items-center gap-2">
            View All Tutorials <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.title} className="origami-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{tutorial.title}</h3>
                  <Badge variant={
                    tutorial.difficulty === "Easy" ? "default" : 
                    tutorial.difficulty === "Medium" ? "secondary" : 
                    "outline"
                  }>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{tutorial.time}</span>
                  <Button variant="outline" size="sm">
                    View Tutorial
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
