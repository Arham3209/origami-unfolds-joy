
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bird, Cat, FolderHeart, Flower2, Package, Shapes, CircuitBoard, Bug, Sparkles, Baby, User, Users } from "lucide-react";

type CategoryType = {
  icon: React.ElementType;
  name: string;
  description: string;
};

const skillCategories = [
  { 
    icon: Baby, 
    name: "Easy (Kids)", 
    description: "Simple folds perfect for beginners and children" 
  },
  { 
    icon: User, 
    name: "Medium", 
    description: "Intermediate designs for those with some experience" 
  },
  { 
    icon: Users, 
    name: "Complex (Adults)", 
    description: "Advanced patterns for experienced folders" 
  },
];

const typeCategories = [
  { icon: FolderHeart, name: "Faces", description: "Expressive face designs" },
  { icon: Cat, name: "Animals", description: "Various animal creations" },
  { icon: Bird, name: "Birds", description: "Flying and perching birds" },
  { icon: Flower2, name: "Flowers", description: "Beautiful floral designs" },
  { icon: Package, name: "Objects", description: "Everyday items and objects" },
  { icon: Shapes, name: "Geometric", description: "Mathematical patterns" },
  { icon: CircuitBoard, name: "Modular", description: "Multi-piece assemblies" },
  { icon: Bug, name: "Insects", description: "Bugs and crawling creatures" },
  { icon: Sparkles, name: "Fantasy", description: "Mythical and magical designs" },
];

export default function CategoriesSection() {
  const [activeTab, setActiveTab] = useState("skill");

  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect origami project based on skill level or type
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-origami-pink to-origami-purple mx-auto mt-4"></div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="skill">By Skill Level</TabsTrigger>
            <TabsTrigger value="type">By Type</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skill" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="type" className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {typeCategories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: CategoryType }) {
  const Icon = category.icon;
  
  return (
    <div className="origami-card p-6 flex flex-col items-center text-center">
      <div className="category-icon mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold mb-2">{category.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
      <Button variant="ghost" className="mt-auto text-origami-purple hover:text-origami-pink hover:bg-origami-purple/10">
        Explore
      </Button>
    </div>
  );
}
