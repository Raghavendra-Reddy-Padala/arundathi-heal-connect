import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/types";
import { User, Clock, Calendar, IndianRupee, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  doctor: Doctor;
  isSelected: boolean;
  onSelect: () => void;
}

export const DoctorCard = ({ doctor, isSelected, onSelect }: DoctorCardProps) => {
  return (
    <Card
      className={cn(
        "p-6 transition-all duration-300 cursor-pointer hover:shadow-[var(--shadow-card-hover)]",
        isSelected && "ring-2 ring-primary bg-primary/5"
      )}
      onClick={onSelect}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
            {doctor.image ? (
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <svg class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  `;
                }}
              />
            ) : (
              <User className="h-12 w-12 text-primary" />
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
              <p className="text-primary font-medium mb-2">{doctor.specialization}</p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Award className="h-4 w-4 text-primary" />
                <span>{doctor.experience} years of experience</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{doctor.availability.days.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>
                    {doctor.availability.timeStart} - {doctor.availability.timeEnd}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <IndianRupee className="h-4 w-4" />
                  <span>₹{doctor.consultationFee}</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button
                variant={isSelected ? "default" : "outline"}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect();
                }}
              >
                {isSelected ? "Selected" : "Select Doctor"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};