
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1607344645866-009c320c00d8?auto=format&fit=crop&q=80&w=800",
    alt: "Paper cranes",
    title: "Traditional Cranes"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544387541-7aa5c3b9c4de?auto=format&fit=crop&q=80&w=800",
    alt: "Origami frog",
    title: "Jumping Frog"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582378553458-1af6067228ad?auto=format&fit=crop&q=80&w=800",
    alt: "Origami dragon",
    title: "Eastern Dragon"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1593540446869-a1a2188848e1?auto=format&fit=crop&q=80&w=800",
    alt: "Lotus flower origami",
    title: "Lotus Flower"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560303787-25e8594a82f9?auto=format&fit=crop&q=80&w=800",
    alt: "Origami boat",
    title: "Paper Boat"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1574264525106-5661f076daa3?auto=format&fit=crop&q=80&w=800",
    alt: "Origami butterfly",
    title: "Butterfly Collection"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&q=80&w=800",
    alt: "Modular origami",
    title: "Geometric Sphere"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1578329557224-48456efc6e6e?auto=format&fit=crop&q=80&w=800",
    alt: "Origami fox",
    title: "Forest Fox"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

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
              className="aspect-square overflow-hidden rounded-lg cursor-pointer paper-fold-container"
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && selectedImageData && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <div 
              className="max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImageData.src} 
                alt={selectedImageData.alt}
                className="w-full h-auto" 
              />
              <div className="bg-white p-4">
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
