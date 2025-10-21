import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingData, Doctor } from "@/types";
import { doctors, concernToDoctorMapping } from "@/data/doctors";
import { DoctorCard } from "./DoctorCard";

interface DoctorSelectionProps {
  data: Partial<BookingData>;
  onNext: (data: Partial<BookingData>) => void;
  onBack: () => void;
}

export const DoctorSelection = ({ data, onNext, onBack }: DoctorSelectionProps) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | undefined>(data.selectedDoctor);
  const [recommendedDoctors, setRecommendedDoctors] = useState<Doctor[]>([]);
  const [otherDoctors, setOtherDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    if (data.primaryConcern) {
      const recommendedIds = concernToDoctorMapping[data.primaryConcern] || [];
      const recommended = doctors.filter((doc) => recommendedIds.includes(doc.id));
      const others = doctors.filter((doc) => !recommendedIds.includes(doc.id));
      setRecommendedDoctors(recommended);
      setOtherDoctors(others);
    } else {
      setRecommendedDoctors([]);
      setOtherDoctors(doctors);
    }
  }, [data.primaryConcern]);

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleNext = () => {
    if (selectedDoctor) {
      onNext({ selectedDoctor });
    }
  };

  return (
    <Card className="p-6 md:p-8 shadow-[var(--shadow-card)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Select Your Doctor</h2>
        <p className="text-muted-foreground">
          {recommendedDoctors.length > 0
            ? "Based on your symptoms, we recommend these specialists"
            : "Choose from our available doctors"}
        </p>
      </div>

      <div className="space-y-8">
        {recommendedDoctors.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-success rounded-full"></span>
              Recommended for You
            </h3>
            <div className="grid gap-4">
              {recommendedDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  isSelected={selectedDoctor?.id === doctor.id}
                  onSelect={() => handleSelectDoctor(doctor)}
                />
              ))}
            </div>
          </div>
        )}

        {otherDoctors.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {recommendedDoctors.length > 0 ? "Other Available Doctors" : "Available Doctors"}
            </h3>
            <div className="grid gap-4">
              {otherDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  isSelected={selectedDoctor?.id === doctor.id}
                  onSelect={() => handleSelectDoctor(doctor)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-6 mt-6 border-t">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!selectedDoctor} size="lg">
          Next: Choose Time
        </Button>
      </div>
    </Card>
  );
};
