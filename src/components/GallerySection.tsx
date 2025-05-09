
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800",
    alt: "Paper cranes",
    title: "Traditional Cranes"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1630230594998-2af8ef67e19b?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    alt: "Origami frog",
    title: "Jumping Frog"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629234372512-fd3a11296bef?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    alt: "Origami dragon",
    title: "Eastern Dragon"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1628175752008-0c971bc60312?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    alt: "Lotus flower origami",
    title: "Lotus Flower"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1612259834372-3b063e4400ad?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    alt: "Origami boat",
    title: "Paper Boat"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1617872564402-e92bfce78e47?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&q=80&w=800",
    alt: "Origami butterfly",
    title: "Butterfly Collection"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1618207773994-246aa8515b4d?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    alt: "Modular origami",
    title: "Geometric Sphere"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1629866646295-197e72b19fff?auto=format&fit=crop&q=80&w=800",
    fallbackSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    alt: "Origami fox",
    title: "Forest Fox"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const handleImageError = (id: number) => {
    setErrorImages(prev => ({
      ...prev,
      [id]: true
    }));
    
    // Try loading the fallback image
    const image = galleryImages.find(img => img.id === id);
    if (image) {
      const fallbackImg = new Image();
      fallbackImg.src = image.fallbackSrc;
      fallbackImg.onload = () => handleImageLoad(id);
    }
  };

  // Preload all gallery images
  useEffect(() => {
    const preloadPromises = galleryImages.map(image => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          handleImageLoad(image.id);
          resolve(image.id);
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${image.src}`);
          handleImageError(image.id);
          resolve(image.id);
        };
      });
    });
    
    Promise.all(preloadPromises).then(() => {
      console.log('All gallery images preloaded');
    });
    
    return () => {
      // Cleanup
    };
  }, []);

  const selectedImageData = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery Showcase</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be inspired by these beautiful origami creations
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-origami-pink to-origami-purple mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 hover-scale"
              onClick={() => openLightbox(image.id)}
            >
              <AspectRatio ratio={1/1} className="bg-origami-blue/10">
                <div className="relative w-full h-full">
                  {!loadedImages[image.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-origami-blue/20 to-origami-pink/20">
                      <div className="w-10 h-10 border-3 border-origami-purple/30 border-t-origami-purple rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img 
                    src={errorImages[image.id] ? image.fallbackSrc : image.src} 
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-500 hover:scale-110 ${loadedImages[image.id] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                  />
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>

        {/* Lightbox with enhanced animation */}
        {selectedImage !== null && selectedImageData && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <div 
              className="max-w-4xl max-h-[90vh] overflow-hidden rounded-lg animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={errorImages[selectedImageData.id] ? selectedImageData.fallbackSrc : selectedImageData.src} 
                alt={selectedImageData.alt}
                className="w-full h-auto" 
              />
              <div className="bg-white p-4 bg-opacity-90 backdrop-blur-sm">
                <h3 className="text-xl font-bold">{selectedImageData.title}</h3>
                <p className="text-gray-600">{selectedImageData.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
