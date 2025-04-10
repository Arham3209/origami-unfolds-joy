
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-origami-blue/30 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-origami-yellow rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-origami-pink rounded-full opacity-50"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-origami-green rounded-full opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 sm:pt-32 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Discover the Joy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-origami-pink to-origami-purple">Paper Folding</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Origami tutorials for kids, adults, and enthusiasts of all levels
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-origami-pink to-origami-purple text-white text-lg px-8 py-6"
                onClick={() => scrollToSection('categories')}
              >
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 paper-fold-container">
            <div className="paper-fold">
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320c00d8?auto=format&fit=crop&q=80" 
                alt="Origami crane" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gray-600">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
