
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function AboutUsSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageSrc = "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=400";
  const fallbackImageSrc = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400";

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      console.error("Failed to load AboutUs image");
      setImageError(true);
      // Try loading the fallback image
      const fallbackImg = new Image();
      fallbackImg.src = fallbackImageSrc;
      fallbackImg.onload = () => {
        setImageLoaded(true);
      };
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <section id="feedback" className="py-20 bg-gradient-to-b from-white to-origami-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-origami-pink to-origami-purple mx-auto"></div>
        </div>

        <Card className="max-w-3xl mx-auto hover-scale">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 relative">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-origami-purple/20 relative">
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-origami-blue/20 to-origami-pink/20">
                      <div className="w-10 h-10 border-3 border-origami-purple/30 border-t-origami-purple rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img 
                    src={imageError ? fallbackImageSrc : imageSrc} 
                    alt="Origami Artist" 
                    className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      setImageError(true);
                      setImageLoaded(true);
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-origami-yellow rounded-full -z-10 floating"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-origami-pink rounded-full -z-10 floating" style={{animationDelay: "1s"}}></div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-center md:text-left gradient-text">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  OrigamiForAll was founded by a collective of origami enthusiasts with a shared passion for making paper art accessible to everyone. Our team brings together expertise from art education, design, and traditional Japanese paper folding.
                </p>
                <p className="text-gray-600">
                  Our mission is to preserve and promote the art of origami while making it approachable for beginners of all ages. We believe in the power of origami to cultivate patience, precision, and creativity in a world that's increasingly digital.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
