
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Twitter, Youtube, Mail, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    submitDesign: false
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, submitDesign: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      submitDesign: false
    });
  };

  return (
    <section id="contact" className="py-20 bg-origami-yellow/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact & Feedback</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us or submit your origami designs
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-origami-pink to-origami-purple mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="lg:w-1/3">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Reach out through these channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-origami-purple" />
                  <span>hello@origamiforall.com</span>
                </div>
                
                <p className="text-sm text-gray-600 mt-6 mb-3">Follow us on social media:</p>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-origami-blue/20 rounded-full hover:bg-origami-blue/40 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-2 bg-origami-pink/20 rounded-full hover:bg-origami-pink/40 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-2 bg-origami-blue/20 rounded-full hover:bg-origami-blue/40 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-2 bg-origami-pink/20 rounded-full hover:bg-origami-pink/40 transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:w-2/3">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>We love hearing from our community</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message or feedback" 
                    rows={5}
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="submitDesign"
                    checked={formData.submitDesign}
                    onChange={handleCheckboxChange}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="submitDesign">I want to submit my origami design</Label>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-origami-pink to-origami-purple text-white flex items-center justify-center gap-2">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
