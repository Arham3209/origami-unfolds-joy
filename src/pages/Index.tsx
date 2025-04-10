
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import TutorialSection from "@/components/TutorialSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import AboutUsSection from "@/components/AboutUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <TutorialSection />
      <GallerySection />
      <ContactSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
};

export default Index;
