import { Shield, Clock, Wallet, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Modern Facilities",
    description: "State-of-the-art medical equipment and infrastructure",
  },
  {
    icon: Star,
    title: "Experienced Doctors",
    description: "Highly qualified specialists with years of expertise",
  },
  {
    icon: Wallet,
    title: "Affordable Care",
    description: "Quality healthcare at transparent and reasonable prices",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services and ambulance",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Arundathi Hospital</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your health and wellbeing are our top priorities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
