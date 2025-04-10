
import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Origami<span className="text-origami-pink">For</span>All</h3>
            <p className="text-gray-400 text-sm">
              Bringing the joy of paper folding to everyone, everywhere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-origami-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-origami-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-origami-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-origami-pink transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beginner's Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terminology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Paper Types</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@origamiforall.com</li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Send a Message</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Submit a Design</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} OrigamiForAll. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-origami-pink" /> by paper folding enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
