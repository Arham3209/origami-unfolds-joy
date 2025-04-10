
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";

const tutorials = [
  {
    title: "Paper Crane",
    image: "https://images.unsplash.com/photo-1499744937866-d7e566a20a61?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    description: "Learn to fold the iconic symbol of peace and hope",
    difficulty: "Medium",
    time: "15 mins"
  },
  {
    title: "Lotus Flower",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    description: "Create a beautiful blooming lotus flower",
    difficulty: "Easy",
    time: "10 mins"
  },
  {
    title: "Jumping Frog",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    description: "Fold a frog that actually jumps when pressed",
    difficulty: "Easy",
    time: "8 mins"
  },
  {
    title: "Dragon",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    fallbackImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    description: "Master this challenging mythical creature design",
    difficulty: "Complex",
    time: "45 mins"
  }
];

export default function TutorialSection() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  // Preload all tutorial images
  useEffect(() => {
    const imagePromises = tutorials.map(tutorial => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = tutorial.image;
        img.onload = () => {
          handleImageLoad(tutorial.title);
          resolve(true);
        };
        img.onerror = () => {
          console.error(`Failed to load image for ${tutorial.title}`);
          handleImageError(tutorial.title);
          
          // Try loading fallback
          const fallbackImg = new Image();
          fallbackImg.src = tutorial.fallbackImage;
          fallbackImg.onload = () => {
            handleImageLoad(tutorial.title);
            resolve(true);
          };
          fallbackImg.onerror = () => {
            // If both main and fallback fail, resolve anyway to avoid hanging
            resolve(false);
          };
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      console.log("All tutorial images processed");
    });

    return () => {
      // Cleanup function - nothing needed here since we're using promises
    };
  }, []);

  const handleImageLoad = (title: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [title]: true
    }));
  };

  const handleImageError = (title: string) => {
    setErrorImages(prev => ({
      ...prev,
      [title]: true
    }));
    toast({
      title: "Image Loading Issue",
      description: `Using fallback image for ${title}`,
      variant: "default"
    });
  };

  return (
    <section className="py-20 bg-origami-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 relative">
              Featured Tutorials
              <div className="h-1 w-20 bg-gradient-to-r from-origami-pink to-origami-purple mt-2"></div>
            </h2>
            <p className="text-lg text-gray-600">
              Start with these popular origami designs
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-transparent hover:bg-transparent text-primary hover:text-origami-purple flex items-center gap-2 group">
            View All Tutorials <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.title} className="origami-card overflow-hidden group hover-scale">
              <div className="h-48 overflow-hidden">
                <div className="relative w-full h-full">
                  {!loadedImages[tutorial.title] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-origami-blue/20 to-origami-pink/20">
                      <div className="w-10 h-10 border-3 border-origami-purple/30 border-t-origami-purple rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img 
                    src={errorImages[tutorial.title] ? tutorial.fallbackImage : tutorial.image} 
                    alt={tutorial.title}
                    onLoad={() => handleImageLoad(tutorial.title)}
                    onError={() => {
                      if (!errorImages[tutorial.title]) {
                        handleImageError(tutorial.title);
                        // We'll try the fallback image
                        const fallbackImg = new Image();
                        fallbackImg.src = tutorial.fallbackImage;
                        fallbackImg.onload = () => handleImageLoad(tutorial.title);
                      }
                    }}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages[tutorial.title] ? 'opacity-100' : 'opacity-0'}`} 
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{tutorial.title}</h3>
                  <Badge variant={
                    tutorial.difficulty === "Easy" ? "default" : 
                    tutorial.difficulty === "Medium" ? "secondary" : 
                    "outline"
                  } className={
                    tutorial.difficulty === "Easy" ? "bg-green-500 hover:bg-green-600" : 
                    tutorial.difficulty === "Medium" ? "bg-orange-500 hover:bg-orange-600" : 
                    "border-red-500 text-red-500 hover:bg-red-50"
                  }>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{tutorial.time}</span>
                  <Button variant="outline" size="sm" className="border-origami-purple text-origami-purple hover:bg-origami-purple/10">
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
