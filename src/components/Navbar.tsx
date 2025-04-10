
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#about' },
  { title: 'Categories', href: '#categories' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Contact', href: '#contact' },
  { title: 'Feedback', href: '#feedback' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-serif text-2xl font-semibold text-primary">Origami<span className="text-origami-pink">For</span>All</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-origami-blue hover:bg-opacity-50 transition-colors"
                >
                  {link.title}
                </a>
              ))}
              <Button className="ml-4 bg-gradient-to-r from-origami-pink to-origami-purple text-white">
                Start Learning
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-origami-blue hover:bg-opacity-50"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button className="w-full mt-3 bg-gradient-to-r from-origami-pink to-origami-purple text-white">
              Start Learning
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
