import { Award, Users, Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Arundathi Hospital</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Established with a vision to provide exceptional healthcare services, Arundathi Hospital has been serving the community for over two decades. We combine cutting-edge medical technology with compassionate care to ensure the best outcomes for our patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">20+ Years</h3>
            <p className="text-muted-foreground">Of trusted healthcare excellence</p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">50+ Doctors</h3>
            <p className="text-muted-foreground">Expert specialists across departments</p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
              <Heart className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1L+ Patients</h3>
            <p className="text-muted-foreground">Treated with care and compassion</p>
          </div>
        </div>
      </div>
    </section>
  );
};
