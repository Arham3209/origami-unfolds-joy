
import { Star, Brain, Heart, Smile } from "lucide-react";

export default function AboutSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Improves Concentration",
      description: "Develops focus and attention to detail through precise folding techniques."
    },
    {
      icon: Star,
      title: "Boosts Creativity",
      description: "Stimulates imagination and artistic expression with paper transformation."
    },
    {
      icon: Heart,
      title: "Reduces Stress",
      description: "The meditative process of folding paper helps calm the mind and relieve anxiety."
    },
    {
      icon: Smile,
      title: "Fun for All Ages",
      description: "A rewarding hobby that can be enjoyed by children and adults alike."
    }
  ];

  return (
    <section id="about" className="py-20 bg-origami-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Origami</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-origami-pink to-origami-purple mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Origami, the ancient art of paper folding, originated in China around the 1st century and later became a significant cultural practice in Japan by the 6th century.
              </p>
              <p className="text-lg mb-4">
                The word "origami" comes from the Japanese words "ori" (folding) and "kami" (paper). Traditional origami uses a single sheet of square paper with no cuts, glue or markings.
              </p>
              <p className="text-lg">
                Today, origami has evolved into both an art form and educational tool practiced worldwide, with applications ranging from recreational crafting to scientific and mathematical modeling.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="origami-card p-6">
                <benefit.icon className="w-10 h-10 text-origami-pink mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
