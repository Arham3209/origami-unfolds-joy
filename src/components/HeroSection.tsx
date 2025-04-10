
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const mainImage = "https://images.unsplash.com/photo-1607344645866-009c320c00d8?auto=format&fit=crop&q=80&w=1200";
  const fallbackImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200";
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = mainImage;
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      console.error("Failed to load hero image, trying fallback");
      setImageError(true);
      
      // Try loading fallback image
      const fallbackImg = new Image();
      fallbackImg.src = fallbackImage;
      fallbackImg.onload = () => setImageLoaded(true);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-origami-blue/30 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-origami-yellow rounded-full opacity-50 floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-origami-pink rounded-full opacity-50 floating" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-origami-green rounded-full opacity-50 floating" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-origami-purple rounded-full opacity-50 floating" style={{animationDelay: "0.5s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 sm:pt-32 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Discover the Joy of <span className="gradient-text">Paper Folding</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Origami tutorials for kids, adults, and enthusiasts of all levels
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-origami-pink to-origami-purple text-white text-lg px-8 py-6 hover-scale"
                onClick={() => scrollToSection('categories')}
              >
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:border-origami-purple hover:text-origami-purple transition-colors"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 paper-fold-container">
            <div className="paper-fold">
              <div className="relative rounded-lg shadow-xl overflow-hidden aspect-[4/3]">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-origami-blue/30 to-origami-pink/30 animate-pulse flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-origami-purple/30 border-t-origami-purple rounded-full animate-spin"></div>
                  </div>
                )}
                <img 
                  src={imageError ? fallbackImage : mainImage} 
                  alt="Origami crane"
                  className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    console.error("Failed to load hero image");
                    setImageError(true);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
