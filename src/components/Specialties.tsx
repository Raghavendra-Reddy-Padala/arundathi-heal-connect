import { specialties } from "@/data/specialties";
import { Card } from "@/components/ui/card";
import { Heart, Bone, Baby, Stethoscope, Activity, Sparkles } from "lucide-react";

const iconMap: Record<string, any> = {
  Heart,
  Bone,
  Baby,
  Stethoscope,
  Activity,
  Sparkles,
};

export const Specialties = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Specialties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specializations
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specialties.map((specialty) => {
            const IconComponent = iconMap[specialty.icon];
            return (
              <Card
                key={specialty.id}
                className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-border bg-card cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-card-foreground">
                      {specialty.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{specialty.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
